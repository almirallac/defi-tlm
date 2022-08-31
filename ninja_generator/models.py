from django.db import models

# Create your models here.
class NinjaName(models.Model):
    name = models.CharField(max_length=50, null=False)
    id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name

class Technology(models.Model):
    name = models.CharField(max_length=50, null=False)
    type = models.CharField(max_length=50, null=False)
    description = models.TextField(null=True, blank=True)
    id = models.AutoField(primary_key=True, editable=False)
    
    def __str__(self):
        return self.name