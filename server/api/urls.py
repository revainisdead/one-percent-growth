from django.urls import include, path, re_path
from rest_framework import routers

from api import views

# By default with these api urls, no trailing slash means no data.
# Turning training_slash off means only that the only way the url will
# work will be when there is no trailing slash (better for client side
# fetches which may strip the trailing slash when making requests).
# router = routers.DefaultRouter(trailing_slash=False)

router = routers.DefaultRouter()
router.register(r"users", views.UserViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
