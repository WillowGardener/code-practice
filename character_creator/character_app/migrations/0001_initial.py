# Generated by Django 3.2.6 on 2021-08-13 23:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Armor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('damage_reduction', models.IntegerField(default=10)),
                ('dodge_chance', models.IntegerField(default=10)),
                ('weight', models.IntegerField(default=10)),
            ],
        ),
        migrations.CreateModel(
            name='Weapon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('damage', models.IntegerField()),
                ('damage_type', models.CharField(max_length=50)),
                ('crit_chance', models.IntegerField(default=10)),
            ],
        ),
        migrations.CreateModel(
            name='Character',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('strength', models.IntegerField(default=10)),
                ('dexterity', models.IntegerField(default=10)),
                ('constitution', models.IntegerField(default=10)),
                ('intelligence', models.IntegerField(default=10)),
                ('wisdom', models.IntegerField(default=10)),
                ('charisma', models.IntegerField(default=10)),
                ('max_health', models.IntegerField(default=20)),
                ('armor', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='character_app.armor')),
                ('weapon', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='character_app.weapon')),
            ],
        ),
    ]
