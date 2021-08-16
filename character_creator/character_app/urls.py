from django.contrib import admin
from django.urls import path
from . import views

app_name='character_app'

urlpatterns = [
    
    path('',views.home, name='home'),
    path('add_character', views.add_character, name='add_character')
]
