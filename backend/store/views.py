from decimal import Decimal, ROUND_HALF_UP

from django.contrib.auth import authenticate, get_user_model
from rest_framework import generics, status, viewsets
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView

from .models import Product, PromoCode
from .permissions import IsAdminOrReadOnly
from .serializers import ProductSerializer, PromoValidationSerializer, RegisterSerializer

User = get_user_model()


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    permission_classes = [IsAdminOrReadOnly]

    def get_queryset(self):
        queryset = Product.objects.all()
        if not self.request.user.is_staff:
            queryset = queryset.filter(is_active=True)
        category = self.request.query_params.get("category")
        if category:
            queryset = queryset.filter(category=category)
        return queryset


class PromoValidationView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = PromoValidationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        code = serializer.validated_data["code"].strip()
        subtotal = serializer.validated_data["subtotal"]
        promo = PromoCode.objects.filter(code__iexact=code).first()
        if promo is None:
            return Response({"detail": "That promo code was not found."}, status=status.HTTP_404_NOT_FOUND)

        reason = promo.unavailable_reason(subtotal)
        if reason:
            return Response({"detail": reason}, status=status.HTTP_400_BAD_REQUEST)

        discount = (subtotal * promo.discount_percent / Decimal("100")).quantize(
            Decimal("0.01"), rounding=ROUND_HALF_UP
        )
        return Response({
            "valid": True,
            "code": promo.code,
            "discount_percent": promo.discount_percent,
            "discount_amount": discount,
            "new_total": subtotal - discount,
        })


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        identifier = str(request.data.get("identifier", "")).strip()
        password = request.data.get("password", "")
        if not identifier or not password:
            return Response({"detail": "Enter your username or email and password."}, status=status.HTTP_400_BAD_REQUEST)

        username = identifier
        if "@" in identifier:
            user = User.objects.filter(email__iexact=identifier).first()
            username = user.username if user else ""
        user = authenticate(request, username=username, password=password) if username else None
        if user is None or not user.is_active:
            return Response({"detail": "Incorrect username/email or password."}, status=status.HTTP_401_UNAUTHORIZED)

        refresh = RefreshToken.for_user(user)
        return Response({
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "user": {"id": user.pk, "username": user.username, "email": user.email},
        })
