# Generated by Django 4.2.13 on 2024-06-28 03:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_profile_role'),
    ]

    operations = [
        migrations.CreateModel(
            name='Personality',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('personality_name', models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name='profile',
            name='personalities',
            field=models.ManyToManyField(related_name='user_profiles', to='accounts.personality'),
        ),
    ]
