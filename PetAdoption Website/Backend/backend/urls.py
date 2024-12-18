from django.urls import path
from app import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin

urlpatterns = [
    path('email/', views.ContactFormAPIView.as_view(), name='contact-form'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('pets/', views.PetListView.as_view(), name='pet-list'),
    path('admin/', admin.site.urls),
    path('filter-options/', views.filter_options, name='filter-options'),


]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
