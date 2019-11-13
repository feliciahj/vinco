from django.urls import path
from .views import FundListView, FundDetailView, StructureListView, StructureDetailView, RegionListView, RegionDetailView, StyleListView, StyleDetailView

urlpatterns = [
    path('funds', FundListView.as_view()),
    path('funds/<int:pk>/', FundDetailView.as_view()),
    path('structures', StructureListView.as_view()),
    path('structures/<int:pk>/', StructureDetailView.as_view()),
    path('regions', RegionListView.as_view()),
    path('regions/<int:pk>/', RegionDetailView.as_view()),
    path('styles', StyleListView.as_view()),
    path('styles/<int:pk>/', StyleDetailView.as_view())
]