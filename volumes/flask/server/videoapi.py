import logging
import json
import requests
from flask import request, session
from flask_restful import Resource, reqparse
from mysql import mysql
from weblogger import weblogger
noautherror=({"message":"no auth"}, 403)

class addVideo(Resource):
    def post(self):
        if session.get('user') !='admin': return noautherror
        data = request.get_json() or request.form
        dbh = mysql()
        response = dbh.addVideo(data)
        dbh.db.close()
        return response

class updateVideo(Resource):
    def patch(self,vid):
        if session.get('user') !='admin': return noautherror
        data = request.get_json() or request.form
        dbh = mysql()
        response = dbh.updateVideo(vid,data)
        dbh.db.close()
        return response

class deleteVideo(Resource):
    def delete(self,vid):
        if session.get('user') !='admin': return noautherror
        dbh = mysql()
        response = dbh.deleteVideo(vid)
        dbh.db.close()
        return response

class pagedVideo(Resource):
    def get(self):
        weblogger()
        parser= reqparse.RequestParser()
        parser.add_argument('limit',location='args')
        parser.add_argument('offset',location='args')
        parser.add_argument('q',location='args')
        parser.add_argument('status',location='args')
        self.params=parser.parse_args()
        offset = self.params.get('offset')
        limit = self.params.get('limit')
        query = self.params.get('q')
        status = self.params.get('status')
        if offset is None: offset=0
        if limit is None: limit=20
        if status is None: status=2
        dbh = mysql()
        response = dbh.getPaged(limit,offset,query,status)
        dbh.db.close()
        return response

class nordip(Resource):
    def get(self):
        mock={"ip":"81.109.33.64","country":"United Kingdom","country_code":"GB","region":"Surrey","zip_code":"KT12","city":"Walton on Thames","state_code":"SRY","longitude":-0.4139,"latitude":51.3848,"isp":"Virgin Media","isp_asn":"Virgin Media","gdpr":True,"protected":False}
        self.logger=logging.getLogger('nordip')
        #https://web-api.nordvpn.com/v1/ips/lookup/1.1.1.1
        wl = weblogger()
        ipaddr = wl.getIP()
        nordurl=f"https://web-api.nordvpn.com/v1/ips/lookup/{ipaddr}"
        self.logger.debug(f"nordurl: {nordurl}")
        if '192.168' in ipaddr or 'localhost' in ipaddr: return mock
        nip = requests.get(f"https://web-api.nordvpn.com/v1/ips/lookup/{ipaddr}")
        return nip.json()
