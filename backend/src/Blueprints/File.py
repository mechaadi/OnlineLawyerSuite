from flask import Flask, Blueprint, g, request, send_file
from src.model import Post, File
from src.db import db
from src.Middlewares.AuthMiddleware import *
from werkzeug.utils import secure_filename
import os
file_bp = Blueprint('file', __name__, url_prefix='/files')

ALLOWED_EXTENSIONS = ["png", "jpg", "jpeg", "gif"]


def respond(data, code):
    responder = Responder()
    return responder.respond(data, code)

def respond_error(msg, code):
    responder = Responder()
    return responder.respond_error(msg, code)


@file_bp.route('/upload', methods=['POST'])
@check_auth
def _upload_image():
    data = request.files.getlist("file[]")
    for file in data:
        if file.filename == "":
            return respond_error("No filename uploaded", 400)
        filename = secure_filename(file.filename)
        extension = filename.split(".")[-1]
        if extension not in ALLOWED_EXTENSIONS:
            return respond_error(f"{extension} not allowed", 400)
    result = []

    for file in data:
        filename = secure_filename(file.filename)
        db_file = File(filename=filename, owner=g.user.id)
        db_file.save()
        file.save(os.path.join(os.environ["UPLOAD_DIR"], db_file.unique_id))
        result.append(db_file.to_dict())

    return respond(result, 201)


@file_bp.route('<unique_id>', methods=['GET'])
def get_file(unique_id):
    file = File.get_or_none(File.unique_id == unique_id)
    if not file:
        return respond_error("File not found", 404)

    extension = file.filename.split(".")[-1]
    if extension == "jpg":
        extension = "jpeg"
    mime_type = f"image/{extension}"

    return send_file(
        os.path.join(os.environ["UPLOAD_DIR"], file.unique_id), mime_type
    )