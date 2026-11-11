from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from django.utils import timezone


class Product(models.Model):
    class Category(models.TextChoices):
        CLEANSER = "cleanser", "Cleanser"
        SERUM = "serum", "Serum"
        MOISTURIZER = "moisturizer", "Moisturizer"
        OTHER = "other", "Other"

    name = models.CharField(max_length=140)
    slug = models.SlugField(max_length=160, unique=True)
    category = models.CharField(max_length=24, choices=Category.choices, default=Category.OTHER)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=9, decimal_places=2, validators=[MinValueValidator(0)])
    stock_quantity = models.PositiveIntegerField(default=0)
    image = models.ImageField(upload_to="products/", blank=True)
    image_url = models.URLField(blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class PromoCode(models.Model):
    code = models.CharField(max_length=32, unique=True)
    discount_percent = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        validators=[MinValueValidator(0.01), MaxValueValidator(100)],
    )
    minimum_order = models.DecimalField(max_digits=9, decimal_places=2, default=0, validators=[MinValueValidator(0)])
    active = models.BooleanField(default=True)
    valid_from = models.DateTimeField(null=True, blank=True)
    valid_until = models.DateTimeField(null=True, blank=True)
    max_uses = models.PositiveIntegerField(null=True, blank=True)
    usage_count = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["code"]

    def save(self, *args, **kwargs):
        self.code = self.code.strip().upper()
        super().save(*args, **kwargs)

    def unavailable_reason(self, subtotal):
        now = timezone.now()
        if not self.active:
            return "This promo code is inactive."
        if self.valid_from and now < self.valid_from:
            return "This promo code is not active yet."
        if self.valid_until and now > self.valid_until:
            return "This promo code has expired."
        if self.max_uses is not None and self.usage_count >= self.max_uses:
            return "This promo code has reached its usage limit."
        if subtotal < self.minimum_order:
            return f"A minimum order of {self.minimum_order:.2f} is required."
        return None

    def __str__(self):
        return self.code
