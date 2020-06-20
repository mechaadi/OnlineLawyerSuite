import redis
import pickle
import json
from secrets import token_urlsafe
from functools import wraps
from flask import request, g
from src.core.responder import Responder


r = redis.StrictRedis(host='localhost', port=6379, db=0)


def respond_error(msg, code):
    responder = Responder()
    return responder.respond_error(msg, code)

def get_user(access_token):
    try:
        user = pickle.loads(r.get(access_token))
        if user is not None:
            return user
        else:
            return None
    except Exception as e:
        return None
        

def create_token(user):
    token = token_urlsafe(40)
    r.set(token, pickle.dumps(user))
    return token

def check_auth(func):
    @wraps(func)
    def decorated_check_auth(*args, **kwargs):
        user = get_user(request.headers.get('Authorization'))
        if user is not None:
            g.user = user
        else:
            return respond_error("UNAUTHORIZED", 404)
        return func(*args, **kwargs)
    return decorated_check_auth
