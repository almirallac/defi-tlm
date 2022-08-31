from django.db.models import fields
from rest_framework import serializers
from .models import *

class NinjaNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = NinjaName
        fields ='__all__'

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = '__all__'