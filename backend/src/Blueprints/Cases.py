from flask import Flask, Blueprint, g, request
from src.model import Post, File, Cases
from src.db import db
from src.Middlewares.AuthMiddleware import *
from werkzeug.utils import secure_filename
import os
case_bp = Blueprint('cases', __name__, url_prefix='/cases')


def respond(data, code):
    responder = Responder()
    return responder.respond(data, code)


def respond_error(msg, code):
    responder = Responder()
    return responder.respond_error(msg, code)


@case_bp.route('/test')
def test():
    access_token = token_urlsafe(40)
    return 'case ok!'


@case_bp.route('/create', methods=['POST'])
@check_auth
def _create_post():
    body = request.json
    title = body['title']
    description = body['description']
    pub_at = body['pub_at']
    lawyer = body['lawyer']

    c = Cases(title=title, description=description, pub_at=pub_at, user=g.user.id, lawyer=lawyer)

    with db.atomic() as tx:
        try:
            c.save()
            return respond(c.to_dict(), 201)
        except Exception as e:
            return respond_error(str(e), 500)


@case_bp.route('/', methods=['GET'])
@check_auth
def _get_all_cases():
    case = Cases.select()
    case = [c.to_dict() for c in case]
    return respond(case, 201)


@case_bp.route('/<id>', methods=['GET'])
@check_auth
def _get_by_id(id):
    case = Cases.get_by_id(id)
    return respond(case.to_dict(), 201)


@case_bp.route('/<id>', methods=['delete'])
@check_auth
def delete_Case(id):
    case = Cases.get_or_none(Cases.id == id)
    if case is not None:
        if case.user.id == g.user.id or case.layer.id == g.user.id:
            with db.atomic() as tx:
                try:
                    deleted_case = case
                    q = Cases.delete().where(Cases.id == case.id)
                    q.execute()
                    return respond(deleted_case.to_dict(), 201)
                except Exception as e:
                    return respond_error(str(e), 500)
        else:
            return respond_error("UNAUTHORIZED USER", 404)
    else:
        return respond_error("CASE NOT FOUND", 404)







