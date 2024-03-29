# from django.shortcuts import render

from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework import permissions

from api.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows user to be viewed or edited.
    """

    queryset = User.objects.all().order_by("-date_joined")

    serializer_class = UserSerializer

    permission_classes = [permissions.IsAuthenticated]


def show_latest_sql():
    from django.db import connection

    latest_query = connection.queries[0]

    sql = latest_query["sql"]

    print("Latest Query Raw SQL:", sql)
