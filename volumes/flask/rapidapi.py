import json
import logging
import requests
import traceback
import os
RAPID_KEY=os.getenv('RAPID_KEY')
RAPID_URL='toohotpornsearch.p.rapidapi.com'
RAPID_HEADERS={'content-type':'application/json','X-RapidAPI-Host':RAPID_URL,'X-RapidAPI-Key':RAPID_KEY}


class search:
    def __init__(self,sites,query,limit=None):
        qs=f"q={query}&sites={','.join(sites)}&limit={limit}"
        url=f"https://{RAPID_URL}/search?{qs}"
        req = requests.get(url,headers=RAPID_HEADERS)
        self.results=req.json()

class sites:
    def __init__(self):
        url=f"https://{RAPID_URL}/sites"
        req = requests.get(url,headers=RAPID_HEADERS)
        self.results=req.json()

class embed:
    def __init__(self,video_url):
        data={'url':video_url}
        url=f"https://{RAPID_URL}/embed"
        req = requests.post(url,headers=RAPID_HEADERS,json=data)
        self.ret_obj = req.json()

class extract:
    def __init__(self,video_url):
        data={'embed_url':video_url}
        url=f"https://{RAPID_URL}/extract"
        req = requests.post(url,headers=RAPID_HEADERS,json=data)
        self.ret_obj = req.json()




def main():
    logging.basicConfig(format='%(asctime)s - %(threadName)-11s - %(name)s - %(levelname)-8s %(message)s',
    level=logging.getLevelName('DEBUG'),
    datefmt='%Y-%m-%d %H:%M:%S')
    qsites=['www.tnaflix.com']
    s=search(qsites,'galitsin','1')
    url=s.results[0]['url']
    em=embed(url)
    embed_url=em.ret_obj['embed']
    ex=extract(embed_url)
    print(json.dumps(ex.ret_obj,indent=4))


if __name__ == "__main__":
    main()
