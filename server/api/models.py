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


# TODO
# Create "accounts" app
# Create "banking" app

from typing import Any

from django.db import models

from django.contrib.auth.models import User


# TODO Make abstract
class BankAccount(models.Model):
    """
    result
    
    user.accounts
    """

    date = models.DateField()
    #total =
    #
    records = 

    # user.accounts
    # User has many Bank Accounts
    user: User = models.ForeignKey(User, related_name="accounts", on_delete=models.PROTECT)

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


# class Transactions: ?
class Record:
    """
    results

    on BankAccount instance:    account.records
    on Record instance:         record.account.records
                                record.account

    When you see FK: that foreign key model CAN HAVE MANY of the model it's defined on
    """

    # 

    # would be better to never delete this type of data so that it can be recovered if they add bank account back
    # Delete record without deleting account: yes
    #
    # account.records
    # BankAccount has many Records
    account = models.ForeignKey(BankAccount, related_name="records", on_delete=models.PROTECT)  # type: BankAccount


