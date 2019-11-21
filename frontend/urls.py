from django.urls import path, re_path
from .views import Home, Assets

urlpatterns = [
    re_path(r'^[\w\?\=\-\/]*$', Home.as_view()),
    re_path(r'^(?!/api)[\w\?\=\-\/]*$', Assets.as_view())
    # re_path(r'^(?P<filename>bundle.js)$', Assets.as_view()),
    # re_path(r'(?P<filename>assets/[\w\.\-\/]+)$', Assets.as_view()),
]