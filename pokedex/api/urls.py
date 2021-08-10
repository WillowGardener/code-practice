from django.urls import path
from .views import PokemonViewSet, TypeViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

# urlpatterns = [
#     path('pokemon',PokemonViewSet.as_view())
# ]

router = DefaultRouter()
router.register('pokemon', PokemonViewSet, basename='pokemon')
router.register('type', TypeViewSet, basename='type')
router.register('user', UserViewSet, basename='user')

urlpatterns = router.urls 