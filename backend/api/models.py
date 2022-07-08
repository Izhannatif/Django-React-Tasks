from operator import mod
from django.db import models

# Create your models here.

class Task(models.Model):
    text = models.TextField(max_length=1000)
    dayTime = models.TextField(max_length=1000)
    reminder = models.BooleanField(default=False)
    
    def __str__(self):
        return self.text