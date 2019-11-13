#pylint: disable = no-member, arguments-differ

from rest_framework import serializers
from django.contrib.auth import get_user_model
import django.contrib.auth.password_validation as validations
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    def validate(self, data):

        password = data.pop('password')
        password_confirmation = data.pop('password_validation')

        if password != password_confirmation:
            raise ValidationError({'password_confirmation': 'does not match'})

# REMEMBER TO UNCOMMENT THIS BACK IN WHEN DONE TESTING:
        # try:
        #     validations.validate_password(password=password)
        # except ValidationError as err: 
        #     raise serializers.ValidationError({'password': err.messages})

        data['password'] = make_password(password)
        return data
    
    class Meta:
        model = User
        fields = ('username', 'title', 'first_name', 'last_name', 'email', 'password', 'password_confirmation', 'investing_virgin', 'dob')