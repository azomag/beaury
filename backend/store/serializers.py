from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError as DjangoValidationError
from rest_framework import serializers

from .models import Product

User = get_user_model()


class ProductSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False, allow_empty_file=False, write_only=True)
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = (
            "id",
            "name",
            "slug",
            "category",
            "description",
            "price",
            "stock_quantity",
            "image",
            "image_url",
            "is_active",
            "created_at",
            "updated_at",
        )
        read_only_fields = ("id", "created_at", "updated_at")

    def get_image_url(self, product):
        if product.image:
            request = self.context.get("request")
            image_url = product.image.url
            return request.build_absolute_uri(image_url) if request else image_url
        return product.image_url

    def validate_image(self, image):
        if image.size > 8 * 1024 * 1024:
            raise serializers.ValidationError("Image must be 8 MB or smaller.")
        return image

    def update(self, instance, validated_data):
        previous_image = instance.image if "image" in validated_data else None
        instance = super().update(instance, validated_data)
        if previous_image:
            previous_image.delete(save=False)
        return instance


class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True, trim_whitespace=False)

    def validate_username(self, value):
        value = value.strip()
        if User.objects.filter(username__iexact=value).exists():
            raise serializers.ValidationError("This username is already in use.")
        return value

    def validate_email(self, value):
        value = value.strip().lower()
        if User.objects.filter(email__iexact=value).exists():
            raise serializers.ValidationError("An account with this email already exists.")
        return value

    def validate_password(self, value):
        try:
            validate_password(value)
        except DjangoValidationError as error:
            raise serializers.ValidationError(list(error.messages)) from error
        return value

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class PromoValidationSerializer(serializers.Serializer):
    code = serializers.CharField(max_length=32)
    subtotal = serializers.DecimalField(max_digits=9, decimal_places=2, min_value=0)
