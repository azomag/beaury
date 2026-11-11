from decimal import Decimal

from django.db import migrations


def add_demo_catalog(apps, schema_editor):
    Product = apps.get_model("store", "Product")
    PromoCode = apps.get_model("store", "PromoCode")

    Product.objects.get_or_create(
        slug="velvet-cloud-cleanser",
        defaults={
            "name": "Velvet Cloud Cleanser",
            "category": "cleanser",
            "description": "A gentle daily cleanser for soft, refreshed skin.",
            "price": Decimal("38.00"),
            "stock_quantity": 24,
            "image_url": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=400&q=80",
            "is_active": True,
        },
    )
    Product.objects.get_or_create(
        slug="midnight-recovery-oil",
        defaults={
            "name": "Midnight Recovery Oil",
            "category": "serum",
            "description": "A nourishing botanical oil for a calm evening routine.",
            "price": Decimal("64.00"),
            "stock_quantity": 18,
            "image_url": "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&q=80",
            "is_active": True,
        },
    )
    PromoCode.objects.get_or_create(
        code="BOTANICAL10",
        defaults={"discount_percent": Decimal("10.00"), "active": True},
    )


def remove_demo_catalog(apps, schema_editor):
    apps.get_model("store", "Product").objects.filter(
        slug__in=["velvet-cloud-cleanser", "midnight-recovery-oil"]
    ).delete()
    apps.get_model("store", "PromoCode").objects.filter(code="BOTANICAL10").delete()


class Migration(migrations.Migration):
    dependencies = [("store", "0001_initial")]

    operations = [migrations.RunPython(add_demo_catalog, remove_demo_catalog)]
