# Generated by Django 4.1 on 2022-08-29 00:35
from logging import raiseExceptions
from django.db import migrations
import csv

def generate_buzzwords(apps, schema_editor):
    # Reference https://www.geeksforgeeks.org/load-csv-data-into-list-and-dictionary-using-python/
    Technology = apps.get_model("ninja_generator", "Technology")
    db_alias = schema_editor.connection.alias
    
    buzzwordsFile = 'ninja_generator/migrations/data/Buzzword.csv'

    with open(buzzwordsFile) as f:
        reader = csv.DictReader(f)
        for row in reader:
            Technology.objects.using(db_alias).create(
                name= row['Name'],
                type=row['Type'],
                description=row['Description']
            )

class Migration(migrations.Migration):

    dependencies = [
        ("ninja_generator", "0003_technology"),
    ]

    operations = [
        migrations.RunPython(generate_buzzwords),
    ]
