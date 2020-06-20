from peewee import *
from .user import User
from src.model.base_model import BaseModel
from playhouse.shortcuts import model_to_dict

class Post(BaseModel):
    title = CharField()
    content = CharField()
    pub_at = DateTimeField()
    tags = TextField(default="[]")
    images = TextField(default="[]")

    # Foreign Keys
    user = ForeignKeyField(User, backref='posts')

    def to_dict(self):
        return model_to_dict(self, exclude=[Post.user.password])


    class Meta:
        table_name = 'posts'


