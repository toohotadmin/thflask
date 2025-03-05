import os
import requests
import json
from server import app
from flask import redirect, Response, request, session, render_template, send_from_directory
from cachetools import TTLCache
from weblogger import weblogger
from auth import auth
from sites.xvideos import xvembed
import logging

ADMIN_PW=os.getenv('DATABASE_PASSWORD')

logger = logging.getLogger('views')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.route('/js/<string:jsfile>')
def jsfiles(jsfile):
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               jsfile, mimetype='text/javascript')

@app.route('/css/<string:cssfile>')
def cssfiles(cssfile):
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               cssfile, mimetype='text/css')

@app.route('/media/<string:webm>')
def mediafile(webm):
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               webm, mimetype='video/webm')
    


@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        for k in request.form:
            logger.debug(k)
        user = request.form.get('username')
        pw = request.form.get('password')
        if user == 'admin' and pw == ADMIN_PW:
            logger.debug('login worked!')
            session['user'] = user
            return redirect('/edit')
        else:
            session['fail'] = 'Invalid Credentials, Try Again!'
            return render_template('login.j2',m=session['fail'],f=True)
    else:
        a=auth()
        if a.user == 'admin':
            return redirect('/edit')
        else:
            message='Please Enter Login Credentials'
            return render_template('login.j2',m=message)

@app.route('/logout')
def logout():
    session.pop("user")
    return redirect("/")

@app.route('/xvideos')
def xvideos():
    url=request.args.get('url')
    xv=xvembed(url)
    ret_obj = xv.scrape()
    logger.debug(json.dumps(ret_obj,indent=4))
    return render_template('xv.j2',xv=ret_obj)

@app.route('/video')
def video():
    vurl=request.args.get('url')
    video_url=f"{vurl}"
    return render_template('video.j2',video_url=video_url)
        
@app.route('/iframe')
def iframe():
    url=request.args.get('url')
    return render_template('iframe.j2',video_url=url)

@app.route('/player')
def player():
    return render_template('wp.j2')

@app.route('/edit')
def edit():
    wl=weblogger()
    user = session.get('user')
    if user == 'admin':
        return render_template('edit.j2',user=user)
    else:
        return redirect('/login')

# Create a cache with a maximum size of 300 items and a TTL of 300 seconds (5 minutes)
image_cache = TTLCache(maxsize=300, ttl=300)

@app.route('/pi')
def proxy_image():
    # Get the image URL from the query parameter
    weblogger()
    image_url = request.args.get('url')
    addheaders=None
    ctype = 'image/jpeg'
    if not image_url:
        return Response("Missing 'url' query parameter", status=400)

    # Check if the image is already in the cache
    if image_url in image_cache:
        cached_response = image_cache[image_url]
        return Response(
            cached_response['content'],
            status=cached_response['status_code'],
            content_type=cached_response['headers']['Content-Type']
        )

    try:
        # Fetch the image from the external source
        response = requests.get(image_url, headers=addheaders, stream=True)
        response.raise_for_status()
    except requests.RequestException as e:
        return Response(f"Failed to fetch image: {e} referer {addheaders} content {response.text}", status=500)

    # Extract content type from the response headers
    content_type = response.headers.get('Content-Type', ctype)

    # Cache the response
    image_cache[image_url] = {
        'content': response.content,
        'status_code': response.status_code,
        'headers': {'Content-Type': content_type}
    }

    # Return the response using Flask's Response object
    return Response(response.content, status=response.status_code, content_type=content_type)



def stream_video_from_url(url, referer, start, end):
    headers = {'Range': f'bytes={start}-{end}', 'Referer': referer}
    response = requests.get(url, headers=headers, stream=True)
    return response.iter_content(chunk_size=1024)

@app.route('/pv')
def proxy_video():
    weblogger()
    video_url = request.args.get('url')
    referer = request.args.get('referer')
    
    head_response = requests.head(video_url, headers={'Referer': referer})
    file_size = int(head_response.headers.get('Content-Length', 0))

    range_header = request.headers.get('Range', None)

    if not range_header:
        return Response(requests.get(video_url, headers={'Referer': referer}, stream=True).iter_content(chunk_size=1024), mimetype='video/mp4')

    byte_range = range_header.replace("bytes=", "").split("-")
    start_byte = int(byte_range[0])
    end_byte = int(byte_range[1]) if byte_range[1].isdigit() else file_size - 1

    response = Response(
        stream_video_from_url(video_url, referer, start_byte, end_byte),
        status=206, 
        mimetype='video/mp4'
    )
    response.headers['Content-Range'] = f'bytes {start_byte}-{end_byte}/{file_size}'
    response.headers['Content-Length'] = str(end_byte - start_byte + 1)
    response.headers['Accept-Ranges'] = 'bytes'

    return response

@app.route('/')
def get():
    weblogger()
    return render_template('page.j2')

