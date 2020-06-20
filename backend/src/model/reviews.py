from peewee import *
from .user import User
from src.model.base_model import BaseModel
from playhouse.shortcuts import model_to_dict

class Review(BaseModel):
    review = CharField()
    pub_at = DateTimeField()
    stars = IntegerField()

    # Foreign Keys
    user = ForeignKeyField(User, backref='reviews')
    lawyer = ForeignKeyField(User, backref='reviews')

    def to_dict(self):
        return model_to_dict(self, exclude=[Review.user.password, Review.lawyer.password])


    class Meta:
        table_name = 'reviews'


