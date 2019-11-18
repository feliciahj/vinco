# pylint: disable=no-member,arguments-differ

from rest_framework import serializers
from .models import Fund, Structure, Region, Style

class NestedFundSerializer(serializers.ModelSerializer):

    class Meta:
        model = Fund
        fields = (
            'id', 
            'name', 
            'p_and_p', 
            'people', 
            'house', 
            'sustainability_rating', 
            'manager_diversity_rating', 
            'alignment_rating', 
            'inception_date', 
            'fee',
            'y_2018',
            'y_2017',
            'y_2016',
            'y_2015',
            'y_2014',
            'y_2013',
            'y_2012',
            'y_2011',
            'y_2010',
            'y_2009',
            'stock_1',
            'stock_2',
            'stock_3',
            'stock_4',
            'stock_5',
            'stock_6',
            'stock_7',
            'stock_8',
            'stock_9',
            'stock_10',
        )
 

class NestedStyleSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Style
        fields = ('id', 'name')

class NestedRegionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Region
        fields = ('id', 'region', 'description') 

class NestedStructureSerializer(serializers.ModelSerializer):

    class Meta:
        model = Structure
        fields = ('id', 'vehicle')

class StyleSerializer(serializers.ModelSerializer):

    funds = NestedFundSerializer(many=True)

    class Meta: 
        model = Style
        fields = ('id', 'name', 'funds')

class RegionSerializer(serializers.ModelSerializer):

    funds = NestedFundSerializer(many=True)

    class Meta:
        model = Region
        fields = ('id', 'region', 'description', 'funds')

class StructureSerializer(serializers.ModelSerializer):

    funds = NestedFundSerializer(many=True)

    class Meta: 
        model = Structure
        fields = ('id', 'vehicle', 'funds')

class FundSerializer(serializers.ModelSerializer):

    structure = NestedStructureSerializer()
    region = NestedRegionSerializer()
    styles = NestedStyleSerializer(many=True)

    class Meta:
        model = Fund
        fields = (
            'id', 
            'name', 
            'p_and_p', 
            'people', 
            'house', 
            'sustainability_rating', 
            'manager_diversity_rating', 
            'alignment_rating', 
            'inception_date', 
            'fee',
            'y_2018',
            'y_2017',
            'y_2016',
            'y_2015',
            'y_2014',
            'y_2013',
            'y_2012',
            'y_2011',
            'y_2010',
            'y_2009',
            'stock_1',
            'stock_2',
            'stock_3',
            'stock_4',
            'stock_5',
            'stock_6',
            'stock_7',
            'stock_8',
            'stock_9',
            'stock_10',
            'structure',
            'region',
            'styles'
        )

