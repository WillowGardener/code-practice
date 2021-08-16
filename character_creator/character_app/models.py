from django.db import models

class Weapon(models.Model):
    name = models.CharField(max_length=50)
    damage = models.IntegerField()
    damage_type = models.CharField(max_length=50)
    crit_chance = models.IntegerField(default=10)

    def __str__(self):
        return self.name

class Armor(models.Model):
    name = models.CharField(max_length=50)
    damage_reduction = models.IntegerField(default=10)
    dodge_chance = models.IntegerField(default=10)
    weight = models.IntegerField(default=10)

    def __str__(self):
        return self.name
    
class Character(models.Model):
    name = models.CharField(max_length=50)
    strength = models.IntegerField(default=10)
    dexterity = models.IntegerField(default=10)
    constitution = models.IntegerField(default=10)
    intelligence = models.IntegerField(default=10)
    wisdom = models.IntegerField(default=10)
    charisma = models.IntegerField(default=10)
    max_health = models.IntegerField(default=20)
    weapon = models.ForeignKey(Weapon, on_delete=models.PROTECT)
    armor = models.ForeignKey(Armor, on_delete=models.PROTECT)
    total_dodge_chance = models.IntegerField(default=0)
    total_damage = models.IntegerField(default=0)

    def __str__(self):
        return self.name
