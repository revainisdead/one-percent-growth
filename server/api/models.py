"""
A User can have many Bank Accounts (Checking, Savings, Credit Card, Money Market, etc.)
"""

from django.db import models

from django.contrib.auth.models import User

# user = User.objects.create_user("christian", "christian@gmail.com", "a")

# https://docs.djangoproject.com/en/3.2/ref/models/fields/
class BankAccount(models.Model):
    date = models.DateField()

    user = models.ForeignKey()

# Options
# A) BankAccount -> has a type: "checking", "savings"
# B) Inherit -> Savings(BankAccount), Checking(BankAccount)
