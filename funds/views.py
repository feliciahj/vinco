# pylint: disable=no-member

from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Fund, Structure, Region, Style
from .serializers import FundSerializer, StructureSerializer, RegionSerializer, StyleSerializer

# Create your views here.

class FundListView(ListAPIView):
    queryset = Fund.objects.all()
    serializer_class = FundSerializer

class FundDetailView(RetrieveAPIView):
    queryset = Fund.objects.all()
    serializer_class = FundSerializer

class StructureListView(ListAPIView):
    queryset = Structure.objects.all()
    serializer_class = StructureSerializer

class StructureDetailView(RetrieveAPIView):
    queryset = Structure.objects.all()
    serializer_class = StructureSerializer

class RegionListView(ListAPIView):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer

class RegionDetailView(RetrieveAPIView):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer

class StyleListView(ListAPIView):
    queryset = Style.objects.all()
    serializer_class = StyleSerializer

class StyleDetailView(RetrieveAPIView):
    queryset = Style.objects.all()
    serializer_class = StyleSerializer
