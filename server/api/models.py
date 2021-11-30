"""
A User can have many Bank Accounts (Checking, Savings, Credit Card, Money Market, etc.)

Options
---
A) Type (BankAccount) -> has a type: "checking", "savings"
B) Multiple Models (Inherit) -> Savings(BankAccount), Checking(BankAccount)


Use function to get User model?
---
1) from django.contrib.auth import get_user_model
2) User = get_user_model()

Command line
---
`user = User.objects.create_user("christian", "christian@gmail.com", "a")`

Docs
---
https://docs.djangoproject.com/en/3.2/ref/models/fields/

"""
from typing import Any

from django.db import models

from django.contrib.auth.models import User


class BankAccount(models.Model):
    date = models.DateField()

    user: User = models.ForeignKey(User, on_delete=models.PROTECT)

    class Meta:
        abstract = True


class Checking(BankAccount):
    pass

class Savings(BankAccount):
    pass

class GesaCreditCard(BankAccount):
    pass

class PayPalCreditCard(BankAccount):
    pass

class Record:
    pass
