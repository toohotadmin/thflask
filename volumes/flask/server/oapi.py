import logging
import json
import requests
from typing import Optional
from pydantic import BaseModel, Field
from flask_openapi3 import APIBlueprint, Tag, Info
from mysql import mysql
from weblogger import weblogger
from rapidapi import search, sites, embed, extract

noautherror=({"message":"no auth"}, 403)
logger=logging.getLogger('oapi')

tag = Tag(name='thapi', description='TooHot API')

class NotFoundResponse(BaseModel):
    code: int = Field(-1, description="Status Code")
    message: str = Field("Resource not found!", description="Exception Information")

api = APIBlueprint(
    '/',
    __name__,
    url_prefix='/api/v2',
    abp_tags=[tag],
    abp_responses={404: NotFoundResponse},
    doc_ui=True
)


class URL(BaseModel):
    url: str = Field(..., description='Valid URL')

class Embed(BaseModel):
    embed_url: str = Field(..., description='Valid URL')

class Query(BaseModel):
    q: str = Field(None, description='Query string')
    sites: str = Field("all", description='Site Name or CSV list')
    limit: Optional[int] = Field(10, description='Limit of hits per page')


@api.post('/embed',responses={201:{
    "content": {
        "application/json": {
            "schema": {
                "title": "Get Embed Details",
                "type": "object",
                "properties": {
                    "embed": {
                        "type": "string",
                        "description": "embed_url used for extract endpoint"
                    },
                    "tags": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "description":"tag descriptions"
                        }
                    },
                    "images": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "description":"url list of images"
                        }
                    }
                }
            }
        }
    }
}})
def create_embed(body: URL):
    weblogger()
    em = embed(body.url)
    return em.ret_obj

@api.post('/extract',responses={201:{
    "content": {
        "application/json": {
            "schema": {
                "title": "ExtractedVideos",
                "type": "object",
                "properties": {
                    "embed_type": {
                        "type": "string",
                        "description": "How to use extracted video"
                    },
                    "videos": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "description":"link to video file"
                        }
                    }
                }
            }
        }
    }
}})
def extractMP4(body: Embed):
    weblogger()
    ex = extract(body.embed_url)
    return ex.ret_obj

@api.get('/search',responses={200:{
    "content": {
        "application/json": {
            "schema": {
                "title": "list of results",
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "url": {
                        "type": "string",
                        "description": "url of website"
                        },
                        "thumbnail": {
                        "type": "string",
                        "description":"thumbnail view of video"
                        },
                        "site": {
                        "type": "string",
                        "description":"base website address"
                        }
                    }
                }
            }
        }
}}})
def siteSearch(query: Query):
    weblogger()
    logger=logging.getLogger('ss')
    logger.debug(query)
    sstring = query.q
    sites = query.sites
    limit = query.limit
    sitelist=['all']
    if sites is not None:
        sitelist=sites.split(',')
    s=search(sitelist,sstring,limit)
    return s.results

@api.get('/sites',responses={200:{
    "content": {
        "application/json": {
            "schema": {
                "title": "list of sites",
                "type": "array",
                "items": {
                    "type": "string",
                    "description": "supported site"
                }
            }
        }
    }
}})
def listSites():
    weblogger
    s=sites()
    return s.results
