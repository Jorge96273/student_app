# Generated by Django 5.0.3 on 2024-03-19 19:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student_app', '0003_alter_student_personal_email_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='good_student',
            field=models.BooleanField(default=None),
        ),
    ]
