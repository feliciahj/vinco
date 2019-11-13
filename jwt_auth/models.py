from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):

    title = models.CharField(max_length=4)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=100, unique=True)
    dob = models.DateField(null=True)
    investing_virgin = models.BooleanField(default=True)

