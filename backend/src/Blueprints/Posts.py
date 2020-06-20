from flask import Flask, Blueprint, g, request
from src.model import Post, File
from src.db import db
from src.Middlewares.AuthMiddleware import *
from werkzeug.utils import secure_filename
import os
post_bp = Blueprint('post', __name__, url_prefix='/posts')


def respond(data, code):
    responder = Responder()
    return responder.respond(data, code)


def respond_error(msg, code):
    responder = Responder()
    return responder.respond_error(msg, code)


@post_bp.route('/test')
def test():
    access_token = token_urlsafe(40)
    return 'post ok!'


@post_bp.route('/create', methods=['POST'])
@check_auth
def _create_post():
    body = request.json
    title = body['title']
    content = body['content']
    pub_at = body['pub_at']
    tags = json.loads(json.dumps(body['tags']))
    images = json.loads(json.dumps(body['images']))

    p = Post(title=title, content=content, pub_at=pub_at, user=g.user.id, tags=tags, images=images)

    with db.atomic() as tx:
        try:
            p.save()
            return respond(p.to_dict(), 201)
        except Exception as e:
            return respond_error(str(e), 500)


@post_bp.route('/', methods=['GET'])
@check_auth
def _get_all_posts():
    post = Post.select()
    post = [p.to_dict() for p in post]
    return respond(post, 201)


@post_bp.route('/<id>', methods=['GET'])
@check_auth
def _get_by_id(id):
    post = Post.get_by_id(id)
    return respond(post.to_dict(), 201)


@post_bp.route('/<id>', methods=['delete'])
@check_auth
def delete_post(id):
    post = Post.get_or_none(Post.id == id)
    if post is not None:
        if post.user.id == g.user.id:
            with db.atomic() as tx:
                try:
                    deleted_post = post
                    q = Post.delete().where(Post.id == post.id)
                    q.execute()
                    return respond(deleted_post.to_dict(), 201)
                except Exception as e:
                    return respond_error(str(e), 500)
        else:
            return respond_error("UNAUTHORIZED USER", 404)
    else:
        return respond_error("POST NOT FOUND", 404)







