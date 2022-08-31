from django.urls import path
from ninja_generator.views import getNinjaNameCollection, generateNinjaNameFromInput, getTechnologies

urlpatterns = [
    path('', generateNinjaNameFromInput, name='get-ninja-name'),
    path('collection', getNinjaNameCollection, name='get-ninja-name-collection'),
    path('technology', getTechnologies, name='technologies')
]