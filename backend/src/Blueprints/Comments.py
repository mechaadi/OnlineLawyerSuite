from flask import Flask, Blueprint, g, request
from datetime import datetime
from src.model import Post, User, Comment

import json
from src.db import db
from src.core.responder import Responder

from secrets import token_urlsafe
from src.Middlewares.AuthMiddleware import *

comment_bp = Blueprint('comment', __name__, url_prefix='/comment')


def respond(data, code):
    responder = Responder()
    return responder.respond(data, code)


def respond_error(msg, code):
    responder = Responder()
    return responder.respond_error(msg, code)


@comment_bp.route('/test')
def test():
    return 'comment ok!'


@comment_bp.route('/create', methods=['Post'])
@check_auth
def create_comment():
    user = g.user
    data = request.json
    comment_text = data['comment']
    pub_at = data['pub_at']
    post_id = data['post']

    post = Post.get_or_none(Post.id == post_id)
    if post is not None:
        comment = Comment(comment=comment_text, user=user.id, post=post.id, pub_at=pub_at)
        with db.atomic() as tx:
            try:
                comment.save()
                return respond(comment.to_dict(), 201)
            except Exception as e:
                tx.rollback()
                return respond_error(str(e), 500)
    else:
        return respond_error("No post found!", 404)


@comment_bp.route('/<id>', methods=['Post'])
@check_auth
def get_post_comments(id):
    post = Post.get_or_none(Post.id == id)
    comments = Comment.select().where(Comment.post == post)
    comments = [c.to_dict() for c in comments]
    return respond(comments, 201)

@comment_bp.route('/<id>', methods=['delete'])
@check_auth
def delete_comment(id):
    user = g.user
    comment = Comment.get_or_none(Comment.id == id)
    if comment is not None:
        if user.id == comment.user.id:
            with db.atomic() as tx:
                try:
                    deleted_comment = comment
                    q = Comment.delete().where(Comment.id == comment.id)
                    q.execute()
                    return respond(deleted_comment.to_dict(), 201)
                except Exception as e:
                    return respond_error(str(e), 404)
        else:
            return respond_error("UNAUTHORIZED USER", 404)
    else:
        return respond_error("COMMENT NOT FOUND", 404)
            



    








