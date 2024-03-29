from django.db import models

# Create your models here.

class Student(models.Model):
    name = models.CharField(default=None, max_length=255, blank = False)
    student_email = models.EmailField(default="stu@gmail", max_length=100, unique=True, blank=False)
    personal_email = models.EmailField(default="per@gmail", max_length=100, null=True, unique=True)
    locker_number = models.IntegerField(default=110, unique=True)
    locker_combination = models.CharField(default="12-12-12",max_length=10, blank=False)
    good_student = models.BooleanField(default=True)
    

    def __str__(self):
        return f"{self.name} - {self.student_email} - {self.locker_number}"


    def locker_reassignment(self):
        self.locker_number = input("Enter new locker numeber.")
        self.save()
    
    def student_status(self):
        status = input("Enter 'True' or 'False' for status.")
        if status == "True":
            status = True
        else:
            status = False
        self.good_student = status
        self.save()
