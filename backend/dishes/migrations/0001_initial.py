# Generated by Django 2.2 on 2019-04-18 07:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dish',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('restuarant', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('price', models.CharField(max_length=100)),
                ('listTime', models.CharField(max_length=100)),
            ],
        ),
    ]
