from multiprocessing import Condition
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from ninja_generator.serializers import NinjaNameSerializer, TechnologySerializer
from ninja_generator.models import *

from rest_framework import status
import random



@api_view(['GET'])
def getNinjaNameCollection(request):
    nameCollection = NinjaName.objects.all().order_by('-id')
    serializer = NinjaNameSerializer(nameCollection, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


# Reference : https://stackoverflow.com/questions/26248379/influence-of-choosing-string-as-seed-of-random-on-the-output
@api_view(['GET'])
def generateNinjaNameFromInput(request):
    inputName = request.GET.get('x', '')

    if inputName == '':
        return Response({'error': 'Input name cannot be empty'}, status=status.HTTP_400_BAD_REQUEST)

    numberOfNames = NinjaName.objects.all().order_by('-id').count()

    random.seed(inputName)
    selectedId = random.randint(0, numberOfNames)

    name = NinjaName.objects.get(id=selectedId)  
    serializer = NinjaNameSerializer(name, many=False)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def getTechnologies(request):
    technologyCollection = Technology.objects.all().order_by('-id')  
    serializer = TechnologySerializer(technologyCollection, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
