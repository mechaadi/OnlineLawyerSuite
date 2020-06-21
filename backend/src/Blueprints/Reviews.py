from flask import Flask, Blueprint, g, request
from datetime import datetime
from src.model import Review, User

import json
from src.db import db
from src.core.responder import Responder

from secrets import token_urlsafe
from src.Middlewares.AuthMiddleware import *
import dateutil.parser as dt


review_bp = Blueprint('review', __name__, url_prefix='/review')


def respond(data, code):
    responder = Responder()
    return responder.respond(data, code)
    

def respond_error(msg, code):
    responder = Responder()
    return responder.respond_error(msg, code)


@review_bp.route('/test')
def test():
    return 'review ok!'


@review_bp.route('/<id>', methods=['GET'])
@check_auth
def get_reviews(id):
    lawyer = User.get_or_none(User.id==id)
    if lawyer is not None:
        review = Review.select().where(Review.lawyer == id)
        review = [r.to_dict() for r in review]
        return respond(review, 201)
    else:
        return respond("No review", 500)

@review_bp.route('/create', methods=['Post'])
@check_auth
def create_review():
    user = g.user
    data = request.json
    print(data)
    comment_text = data['review']
    pub_at = dt.parse(data['pub_at'])
    stars = data['stars']
    lawyer_id = data['lawyer']

    lawyer = User.get_or_none(User.id == lawyer_id)
    print(lawyer.username)
    if lawyer is not None:
        review = Review(review=comment_text, user=g.user.id, lawyer=lawyer_id, pub_at=pub_at, stars=stars)
        with db.atomic() as tx:
            try:
                review.save()
                return respond(review.to_dict(), 201)
            except Exception as e:
                print(e)
                tx.rollback()
                return respond_error(str(e), 500)
    else:
        return respond_error("No lawyer found!", 404)


@review_bp.route('/<id>', methods=['Post'])
@check_auth
def get_lawyer_reviews(id):
    lawyer = User.get_or_none(User.id == id)
    reviews = Review.select().where(Review.lawyer == lawyer)
    reviews = [r.to_dict() for r in reviews]
    return respond(reviews, 201)

@review_bp.route('/<id>', methods=['delete'])
@check_auth
def delete_review(id):
    user = g.user
    review = Review.get_or_none(Review.id == id)
    if review is not None:
        if user.id == review.user.id:
            with db.atomic() as tx:
                try:
                    deleted_review = review
                    q = Review.delete().where(Review.id == review.id)
                    q.execute()
                    return respond(deleted_review.to_dict(), 201)
                except Exception as e:
                    return respond_error(str(e), 404)
        else:
            return respond_error("UNAUTHORIZED USER", 404)
    else:
        return respond_error("REVIEW NOT FOUND", 404)
            



    








