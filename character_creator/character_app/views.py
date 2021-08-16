from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

from .models import *

def home(request):
    #This is our home view. It simply defines all of our object lists, plugs them into a context, and then
    #sends the user to our home.html template
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
    #lines 24-36 grab the various values input by the user. It grabs them according to the name assigned
    #to them in the HTML, then saves them as variables so that we can do math to them in python

    character_name = request.POST.get('charactername')

    strength = int(request.POST.get('strength'))
    dexterity = int(request.POST.get('dexterity'))
    constitution = int(request.POST.get('constitution'))
    intelligence = int(request.POST.get('intelligence'))
    wisdom = int(request.POST.get('wisdom'))
    charisma = int(request.POST.get('charisma'))

    max_health = constitution+20

    weapon_string = request.POST['weapon']
    armor_string = request.POST['armor']

    #Here, we search through all weapons and then all armors (which I created using the admin panel) and
    # asks each of them whether its name matches the value entered by the user using the select and option
    # tags. If the name matches, it assigns that object to a variable, named weapon and armor, respectively. 
    #  This way, later we can assign each weapon to a character--because we defined the character's "weapon" 
    # attribute using models.Foreignkey

    weapon = Weapon.objects.get(name=weapon_string)
    armor = Armor.objects.get(name=armor_string)

    #This is where we do the math! My math is pretty simple, just to give a basic example. Your math will be
    #way more complicated, because you are an actual engineer while I am simply a keyboard dork. But you can
    #see that we're simply taking in our variables from earlier, doing some math to them, and then assigning
    #that to a new variable. These are all local variables, and so they only exist for a few milliseconds while
    #this view is running.
    
    total_dodge_chance = armor.dodge_chance + dexterity/2
    total_damage = weapon.damage + (strength-10)/2
    
    #that's why we are taking these variables. creating a new character object, and then plugging each variable
    #into our character object. See all the things in the parentheses after create()? This is where I'm assigning
    #the local variables we created in this function to the attributes of this character object--the attributes
    #we defined in our models.py. This way, all our variables are now saved in a database, attached to this 
    #Character object.

    character = Character.objects.create(name=character_name,max_health=max_health,strength=strength,dexterity=dexterity,constitution=constitution,intelligence=intelligence,wisdom=wisdom,charisma=charisma,weapon=weapon,armor=armor, total_dodge_chance=total_dodge_chance,total_damage=total_damage)

    return HttpResponseRedirect(reverse('character_app:home'))