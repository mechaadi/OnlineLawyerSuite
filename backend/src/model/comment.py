from src.model.base_model import BaseModel
from src.model.user import User
from src.model.post import Post
import peewee as pw
from playhouse.shortcuts import model_to_dict

class Comment(BaseModel):
    comment = pw.CharField()
    pub_at = pw.DateTimeField()
    
    # Foreign Key
    user = pw.ForeignKeyField(User, backref='comments', on_delete='CASCADE')
    post = pw.ForeignKeyField(Post, backref='comments', on_delete='CASCADE')

    def to_dict(self):
        return model_to_dict(self, exclude=[Comment.user.password, Comment.post.user.password])

    class Meta:
        table_name = 'comments'


