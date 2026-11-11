from django.contrib import admin

from .models import Product, PromoCode


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "price", "stock_quantity", "is_active", "updated_at")
    list_filter = ("category", "is_active")
    search_fields = ("name", "slug", "description")
    prepopulated_fields = {"slug": ("name",)}
    list_editable = ("price", "stock_quantity", "is_active")


@admin.register(PromoCode)
class PromoCodeAdmin(admin.ModelAdmin):
    list_display = ("code", "discount_percent", "active", "valid_from", "valid_until", "usage_count", "max_uses")
    list_filter = ("active",)
    search_fields = ("code",)
    list_editable = ("active",)
