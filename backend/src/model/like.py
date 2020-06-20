import peewee as pw
from src.model.base_model import BaseModel
from src.model.user import User
from src.model.post import Post
from playhouse.shortcuts import model_to_dict

class Like(BaseModel):
    user = pw.ForeignKeyField(User, backref='likes')
    post = pw.ForeignKeyField(Post, backref='likes')

    def to_dict(self):
        return model_to_dict(self)

    class Meta:
        table_name = 'likes'