import logging
from flask_restful import Api
from flask_openapi3 import OpenAPI, Info

info = Info(title='THAPI', version='BETA')
app = OpenAPI(__name__,info=info)
app.secret_key = 'TESTKeY'
api = Api(app)

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)-8s %(message)s',
filename = "/var/tmp/index.log",
level=logging.DEBUG,
datefmt='%Y-%m-%d %H:%M:%S')

from server import(videoapi,views,oapi)
app.register_api(oapi.api)
api.add_resource(videoapi.addVideo,'/api/video')
api.add_resource(videoapi.updateVideo,'/api/video/<int:vid>')
api.add_resource(videoapi.deleteVideo,'/api/video/<int:vid>')
api.add_resource(videoapi.pagedVideo,'/api/video')
api.add_resource(videoapi.nordip,'/api/nord')

if __name__=='__main__':
   app.run()
