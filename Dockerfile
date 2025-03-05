# Pull base image
FROM alpine:latest


RUN apk update && \
    apk add python3 py3-pip py3-requests py3-cachetools py3-pymysql py3-flask py3-flask-restful py3-six py3-gunicorn

RUN pip install flask-openapi3 flask-openapi3-swagger --break-system-packages

COPY entrypoint.sh entrypoint

ENTRYPOINT ["/bin/sh", "entrypoint"]
