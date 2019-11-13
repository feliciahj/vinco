from django.contrib import admin
from .models import Fund, Structure, Region, Style

# Register your models here.

admin.site.register(Fund)
admin.site.register(Structure)
admin.site.register(Region)
admin.site.register(Style)
