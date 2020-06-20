from flask import Flask, Blueprint, g, request
from datetime import datetime
from src.model import User
from src.db import db
from src.core.responder import Responder
from functools import wraps
from secrets import token_urlsafe
import bcrypt
from src.Middlewares.AuthMiddleware import *

user_bp = Blueprint('user', __name__, url_prefix='/user')


@user_bp.route('/test')
def test():
    return 'user ok!'


def respond(data, code):
    responder = Responder()
    return responder.respond(data, code)


def respond_error(msg, code):
    responder = Responder()
    return responder.respond_error(msg, code)


@user_bp.route('/register', methods=['POST'])
def register_user():
    body = request.json
    print(body, flush=True)
    name = body['name']
    email = body['email']
    username = body['username']
    profile_picture = body['profile_picture']
    password = body['password']
    user_type = body['user_type']
    about = body["about"]
    print(password, flush=True)
    password_encoded = password.encode('utf-8')
    hashed_password = bcrypt.hashpw(password_encoded, bcrypt.gensalt(12))

    user = User(name=name, email=email, username=username, password=hashed_password, profile_picture=profile_picture, user_type=user_type)
    with db.atomic() as tx:
        try:
            user.save()
            return respond(user.to_dict(), 201)
        except Exception as e:
            return respond_error(str(e), 500)


@user_bp.route("/<username>", methods=['GET'])
@check_auth
def get_user_by_username(username):
    user = User.get_or_none(User.username == username)
    print(user)
    if user is not None:
        return respond(user.to_dict(), 201)
    else:
        return respond_error("No user found", 404)


@user_bp.route('/lawyers', methods=['GET'])
def get_lawyers():
    user = User.select().where(User.user_type==0)
    user = [u.to_dict() for u in user]
    print(user,"ok", flush=True)
    return respond(user, 201)

@user_bp.route('/login', methods=['POST'])
def login_user():
    body = request.json
    email = body['email']
    password = body['password']
    user = User.get_or_none(User.email == email)

    if user is not None:
        if bcrypt.checkpw(password.encode('utf-8'), user.password.__str__().encode('utf-8')):
            token = create_token(user)
            return respond(token, 201)
        else:
            return respond_error("UNAUTHORIZED", 404)
