from cerberus import Validator
from abc import abstractmethod
from flask import g, request


class RouteValidator():
    _validator_class = Validator
    _allow_unknown = False

    def __init__(self, request_type="json"):
        self._type = request_type

    @property
    @abstractmethod
    def _schema(self):
        pass

    def _pre_check(self, next_function, *args, **kwargs):
        data = request.json
        self.validate(data)

    def validate(self, data):
        validator = self._validator_class(self._schema)
        validator.allow_unknown = self._allow_unknown

        if validator.validate(data):
            sanitized_data = validator.document
            g.sanitized_data = sanitized_data
        else:
            errors = validator.errors
            raise AssertionError(errors)