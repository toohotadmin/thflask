import logging
import json
import requests
import re


class xvembed:
    def __init__(self,embed):
        self.logger = logging.getLogger('xvembed')
        self.embedtype='xvideos'
        r = requests.get(embed)
        self.text = r.text

    def scrape(self):
        lines = self.text.split("html5player");
        ret_obj={}
        for l in lines:
            if '.set' in l:
                l = l.replace("');",'').strip()
                kv = l.split("('",1)
                if len(kv)>1:
                    k,v = l.split("('",1)
                    k = k.replace('.','')
                    for xvpl in ['setThumbSlide','setIdCDN','setIdCdnHLS','setVideoUrlLow','setVideoUrlHigh','setVideoTitle','setEncodedIdVideo','setVideoHLS','setThumbUrl','setThumbUrl169','setIdCDN','setIdCdnHLS','setVideoURL','setStaticPath']:
                        if k == xvpl: ret_obj[k]=v
        return ret_obj
