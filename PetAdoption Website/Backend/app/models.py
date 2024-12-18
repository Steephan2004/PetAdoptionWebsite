from django.db import models

PET_TYPE_CHOICES = [
    ('dog', 'Dog'),
    ('cat', 'Cat'),
    ('rabbit', 'Rabbit'),
    ('goose', 'Goose'),
]

GENDER_CHOICES = [
    ('male', 'Male'),
    ('female', 'Female'),
]

AGE_CHOICES = [
    ('puppy', 'Puppy/Kitten'),
    ('adult', 'Adult'),
    ('senior', 'Senior'),
]
class UserRegistration(models.Model):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.username
class Pet(models.Model):
    type = models.CharField(max_length=100,choices=PET_TYPE_CHOICES)
    breed = models.CharField(max_length=100)
    gender = models.CharField(max_length=10,choices=GENDER_CHOICES)
    age = models.CharField(max_length=50,choices=AGE_CHOICES)
    image = models.ImageField(upload_to='pets/')
