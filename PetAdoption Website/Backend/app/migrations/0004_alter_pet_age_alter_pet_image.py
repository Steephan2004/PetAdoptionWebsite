# Generated by Django 4.1.13 on 2024-12-18 14:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_alter_pet_gender_alter_pet_image_alter_pet_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pet',
            name='age',
            field=models.CharField(choices=[('puppy', 'Puppy/Kitten'), ('adult', 'Adult'), ('senior', 'Senior')], max_length=50),
        ),
        migrations.AlterField(
            model_name='pet',
            name='image',
            field=models.ImageField(upload_to='pets/'),
        ),
    ]
