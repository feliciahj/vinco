from django.db import models


# Create your models here.


# the STYLE model is a many-to-many relationship with the FUND model:
class Style(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


# the REGION model is a one-to-many relationship with the FUND model:
class Region(models.Model):
    region = models.CharField(max_length=100)

    def __str__(self):
        return self.region


# the STRUCTURE model is a one-to-many relationship with the FUND model:
class Structure(models.Model):
    vehicle = models.CharField(max_length=50)

    def __str__(self):
        return self.vehicle


# the FUND model is the *MAIN* model: 
class Fund(models.Model):
    name = models.CharField(max_length=100, unique=True)
    p_and_p = models.TextField(default='')
    people = models.TextField(default='')
    house = models.CharField(max_length=150)
    sustainability_rating = models.IntegerField()
    manager_diversity_rating = models.IntegerField()
    alignment_rating = models.IntegerField()
    inception_date = models.DateField()
    # for the funds without a % fee I set fee to 0 and then in the front-end manipulate it with an if statement for present those funds separately.
    fee = models.DecimalField(max_digits=5, decimal_places=4)
    # performance figures hardcoded - first three years are required to reflect minimum performnce cycle:
    y_2018 = models.DecimalField(max_digits=5, decimal_places=4)
    y_2017 = models.DecimalField(max_digits=5, decimal_places=4)
    y_2016 = models.DecimalField(max_digits=5, decimal_places=4)
    y_2015 = models.DecimalField(max_digits=5, decimal_places=4, null=True)
    y_2014 = models.DecimalField(max_digits=5, decimal_places=4, null=True)
    y_2013 = models.DecimalField(max_digits=5, decimal_places=4, null=True)
    y_2012 = models.DecimalField(max_digits=5, decimal_places=4, null=True)
    y_2011 = models.DecimalField(max_digits=5, decimal_places=4, null=True)
    y_2010 = models.DecimalField(max_digits=5, decimal_places=4, null=True)
    y_2009 = models.DecimalField(max_digits=5, decimal_places=4, null=True)
    # top ten stocks for a fund hardcoded - not required as it won't be relevant for all:
    stock_1 = models.CharField(max_length=100, blank=True)
    stock_2 = models.CharField(max_length=100, blank=True)
    stock_3 = models.CharField(max_length=100, blank=True)
    stock_4 = models.CharField(max_length=100, blank=True)
    stock_5 = models.CharField(max_length=100, blank=True)
    stock_6 = models.CharField(max_length=100, blank=True)
    stock_7 = models.CharField(max_length=100, blank=True)
    stock_8 = models.CharField(max_length=100, blank=True)
    stock_9 = models.CharField(max_length=100, blank=True)
    stock_10 = models.CharField(max_length=100, blank=True)
    # one-to-many models (structure and region):
    structure = models.ForeignKey(
        Structure,
        related_name='funds',
        on_delete=models.DO_NOTHING,
        null=True
    )
    region = models.ForeignKey(
        Region,
        related_name='funds',
        on_delete=models.DO_NOTHING,
        null=True
    )
    # many-to-many model (styles):
    styles = models.ManyToManyField(
        Style,
        related_name='funds',
        blank=False
    )

    def __str__(self):
        return self.name