from django.contrib import admin
from .models import Pet

# Register the Pet model to make it available in the admin interface
class PetAdmin(admin.ModelAdmin):
    list_display = ('type', 'breed', 'gender', 'age', 'image')
    search_fields = ('type', 'breed', 'gender', 'age')

admin.site.register(Pet, PetAdmin)
