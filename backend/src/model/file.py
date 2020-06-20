from playhouse.shortcuts import model_to_dict
import peewee as pw

from src.model.user import User
from src.model.base_model import BaseModel
from utils.misc import *


class File(BaseModel):
    filename = pw.CharField()
    unique_id = pw.CharField(default=generate_random_string)
    owner = pw.ForeignKeyField(User, backref="files")

    def to_dict(self):
        return model_to_dict(
            self,
            exclude=[File.owner],
            # extra_attrs={"owner_id": self.owner.id}
        )