from flask import Flask
from src.Blueprints.Posts import post_bp
from src.Blueprints.User import user_bp
from src.Blueprints.Comments import comment_bp
from src.Blueprints.File import file_bp
from src.Blueprints.Cases import case_bp
from src.Blueprints.Reviews import review_bp
from src.db import db
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

app.register_blueprint(post_bp)
app.register_blueprint(user_bp)
app.register_blueprint(comment_bp)
app.register_blueprint(file_bp)
app.register_blueprint(case_bp)
app.register_blueprint(review_bp)

@app.before_request
def init():
    if db.is_closed():
        db.connect()

@app.after_request
def close(res):
    if not db.is_closed():
        db.close()
    return res

if __name__ == '__main__':
    app.run(port=8001, debug=True)
