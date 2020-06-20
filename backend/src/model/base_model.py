import peewee as pw
from datetime import datetime
from playhouse.shortcuts import model_to_dict


from src.db import db

class BaseModel(pw.Model):
    created_at = pw.DateTimeField(default=datetime.utcnow)
    updated_at = pw.DateTimeField(default=datetime.utcnow)

    def to_dict(self):
        return model_to_dict(self)

    def save(self, *args, **kwargs):
        self.updated_at = datetime.now()
        super().save(*args, **kwargs)

    class Meta:
        database = db
