import os
import logging
from flask import request
from mysql import mysql

class weblogger:
    def __init__(self):
        self.logger = logging.getLogger('weblogger')
        self.insertLog()

    def getIP(self):
        if request.headers.get('X-Forwarded-For'):
            return request.headers['X-Forwarded-For'].split(',')[0]
        else:
            return request.remote_addr

    def insertLog(self):
        dbh=mysql()
        keys=[]
        values=[]
        self.logger.debug(request.headers)
        for v in ['User-Agent','Referer']:
            keys.append(v.replace('-','_').lower())
            values.append(f"'{request.headers.get(v)}'")
        keys.append('remote_addr')
        values.append(f"'{self.getIP()}'")
        keys.append('query_string')
        values.append(f"'{request.query_string.decode('utf-8')}'")
        keys.append('host')
        values.append(f"'{request.base_url}'")
        sql=f"insert into logs ({','.join(keys)}) VALUES({','.join(values)})"
        self.logger.debug(sql)
        dbh.insert(sql)
        dbh.db.close()

