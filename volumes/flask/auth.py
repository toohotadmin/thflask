import logging
import os
from flask import request, session


class auth:
    users = {
    'admin':'valid'
    }
    def __init__(self,req_admin=False):
        self.logger=logging.getLogger('auth')
        self.user=session.get('user')
        self.req_admin=req_admin
        self.isadmin=False
        self.validuser = self.users.get(self.user)
        self.logger.debug(f"req_admin: {req_admin} user: {self.user}")
        if self.user == 'admin':
            self.isadmin=True

    def check(self):
        self.logger.debug(f"checking for valid user: {self.validuser}")
        retval = False
        if self.req_admin:
            if self.isadmin:
                retval = True
        return retval
