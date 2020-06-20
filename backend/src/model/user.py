from peewee import *
from src.model.base_model import BaseModel
from playhouse.shortcuts import model_to_dict

class User(BaseModel):
    name = CharField()
    password = CharField()
    profile_picture = TextField(default="")
    username = CharField(unique=True)
    email = CharField(unique=True)
    gender = IntegerField(default=0)  # 0 -> male, 1 -> female
    premium = BooleanField(default=False)
    cover_picture = TextField(default="")
    user_type = IntegerField(default=0) # 0 -> user, 1 -> lawyer
    about = TextField(default="")

    def to_dict(self):
        return model_to_dict(self,exclude=[User.password])
    
    class Meta:
        table_name = 'users'




