import pymysql
import logging
import re
import json
import sys
import os
import traceback


class mysql:
    def __init__(self,**kw):
        """sets up basic variables connection"""
        CREDS = {'hostname':'db','username':'root','password':os.environ['DATABASE_PASSWORD']}
        self.db=pymysql.connect(host=CREDS['hostname'],user=CREDS['username'],passwd=CREDS['password'],db="toohot",use_unicode=True,charset='utf8')
        self.sql=None
        self.logger=logging.getLogger('mysql')
        self.logger.debug('finished initializing msyql')
        self.cleanre = re.compile('[^\x00-\x7F]')


    def buildretdict(self,sql):
        self.logger.debug('starting buildretdict')
        dict_cursor = self.db.cursor(pymysql.cursors.DictCursor)
        self.logger.debug(sql)
        dict_cursor.execute(sql)
        ret_dict = dict_cursor.fetchall()
        dict_cursor.close()
        return ret_dict

    def getCurrent(self):
        ret_obj = {}
        sql="select id,embed,url,rank,alt from videos order by updated desc"
        for obj in self.buildretdict(sql):
            ret_obj[obj['embed']] = obj
            ret_obj[obj['url']] = obj
        return ret_obj

    def clean(self,k,v):
        fields = {
            'embed': 'string',
            'url': 'string',
            'thumbnail': 'string',
            'alt': 'string',
            'rank': 'int',
            'status': 'int',
            'title': 'string',
            'site': 'string',
            'origin': 'string',
            'description':'string',
            'tags':'string',
            'actor': 'string',
            'query':'string',
            'size':'string',
            'id': 'int'
            }
        if k in fields:
            if v is None or v == '':
                return ''
            elif fields[k] == 'string':
                return self.cleanre.sub('',v).replace("'",'')
            elif isinstance(int(v), int):
                return v
        else:
            raise Exception(f"Invalid KV pair {k},{v}")
        
    def getPaged(self,limit,offset,q=None,status=2,rank=None):
        where = f"where status in ({status})"
        if q is not None:
            rmsites=''
            q = self.clean('query',q)
            where=f"""
                where (
                    description like '%{q}%'
                    or actor like '%{q}%'
                    or url like '%{q}%'
                    or title like '%{q}%'
                    or tags like '%{q}%'
                    or embed like '%{q}%'
                    or site like '%{q}%'
                    or origin like '%{q}%'
                ) and status in({status}) {rmsites}
            """
        #elif str(status) == '2': where += " and site not in('www.teenporn.ws')"
        if rank is not None: where+=f' and rank > {self.clean(rank)}'
        sql=f"select SQL_CALC_FOUND_ROWS id,embed,url,site, title, thumbnail,rank,alt,origin,description,tags,actor,status from videos {where} order by updated desc limit {limit} offset {offset}"
        self.logger.debug(f"sql: {sql}")
        dict_cursor = self.db.cursor(pymysql.cursors.DictCursor)
        dict_cursor.execute(sql)
        
        ret_list = dict_cursor.fetchall()
        self.logger.debug("fetch complete...")
        dict_cursor.execute("SELECT FOUND_ROWS() as total")
        found_rows = dict_cursor.fetchall()
        nextoffset = int(limit) + int(offset)
        start = int(offset) + 1
        previous = 0
        if offset>limit: previous = int(offset)-int(limit)
        ret_dict = {'total':found_rows[0]['total'],'query':q, 'limit': limit, 'offset': offset, 'start':start, 'previous': previous, 'next': nextoffset,'list':ret_list}
        return ret_dict
            

    def getVideo(self,id):
        sql=f"select * from videos where id={self.clean('id',id)}"
        ret_dict = self.buildretdict(sql)
        return ret_dict[0]

    def addVideo(self,v):
        fields=''
        values=''
        self.logger.debug(json.dumps(v,indent=4))
        for k in v:
            fields += f'{k},'
            values += f"'{self.clean(k,v[k])}',"
        fields = fields.rstrip(',');
        values = values.rstrip(',');
        sql = f"insert into videos({fields}) VALUES({values}) on DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id), updated=NOW()";
        return self.insert(sql)

    def updateVideo(self,vid,v):
        sql = "update videos set"
        for k in v: sql+=f" {k}='{self.clean(k,v[k])}',"
        sql += 'updated=NOW()'
        sql +=f" where id={vid}"
        self.logger.debug(f"updatesql: {sql}")
        return self.insert(sql)

    def deleteVideo(self,vid):
        sql = f"delete from videos where id={self.clean('id',vid)}"
        return self.insert(sql)
        

    def hideVideo(self,vid):
        if isinstance(vid, int):
            sql = f"update video set hide=1 where id={vid}"
            return self.insert(sql)
        else:
            return {"error": f"{vid} is not a valid integer"}

    def updateRank(self,vid):
        if isinstance(vid, int):
            sql= f"update video set rank=(rank+1) where id={vid}"
            return self.insert(sql)
        else:
            return {"error": f"{vid} is not a valid integer"}
        

    def insert(self,sql):
            self.logger.debug(sql)
            cursor=self.db.cursor()
            cursor.execute(sql)
            self.db.commit()
            lastrowid = cursor.lastrowid
            cursor.close()
            return {"success": lastrowid}

def main():
    dbh = mysql()
    dbh.db.close()

if __name__ == "__main__":
    main()
