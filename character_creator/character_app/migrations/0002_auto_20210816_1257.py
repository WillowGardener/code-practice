# Generated by Django 3.2.6 on 2021-08-16 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('character_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='character',
            name='total_damage',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='character',
            name='total_dodge_chance',
            field=models.IntegerField(default=0),
        ),
    ]
