from django.urls import path
from .views import RegisterView, LoginView, DashboardView

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('dashboard/<int:pk>', DashboardView.as_view())
]