from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

from .models import *

def home(request):
    characters = Character.objects.all()
    weapons = Weapon.objects.all()
    armors = Armor.objects.all()

    context = {
        'characters': characters,
        'weapons': weapons,
        'armors': armors
    }

    return render(request, 'home.html', context)

def add_character(request):
    name = request.POST['character_name']

    strength = int(request.POST['strength'])
    dexterity = int(request.POST['dexterity'])
    constitution = int(request.POST['constitution'])
    intelligence = int(request.POST['intelligence'])
    wisdom = int(request.POST['wisdom'])
    charisma = int(request.POST['charisma'])

    max_health = constitution+20

    weapon_string = request.POST['weapon']
    armor_string = request.POST['armor']

    weapons = Weapon.objects.all()
    for wep in weapons:
        if wep.name == weapon_string:
            weapon = wep

    armors = Armor.objects.all()
    for arm in armors:
        if arm.name == armor_string:
            armor = arm
    
    total_dodge_chance = armor.dodge_chance + dexterity/2
    total_damage = weapon.damage + (strength-10)/2
    

    character = Character.objects.create(name=name,max_health=max_health,strength=strength,dexterity=dexterity,constitution=constitution,intelligence=intelligence,wisdom=wisdom,charisma=charisma,weapon=weapon,armor=armor, total_dodge_chance=total_dodge_chance,total_damage=total_damage)

    return HttpResponseRedirect(reverse('character_app:home'))