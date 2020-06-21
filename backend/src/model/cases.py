from src.model.base_model import BaseModel
from src.model.user import User
import peewee as pw
from playhouse.shortcuts import model_to_dict

class Cases(BaseModel):
    title = pw.TextField()
    description = pw.TextField()
    pub_at = pw.DateTimeField()
    verified = pw.BooleanField()
    
    # Foreign Key
    user = pw.ForeignKeyField(User, backref='cases', on_delete='CASCADE')
    lawyer = pw.ForeignKeyField(User, backref='cases', on_delete='CASCADE')

    def to_dict(self):
        return model_to_dict(self, exclude=[Cases.user.password, Cases.lawyer.password])

    class Meta:
        table_name = 'cases'


