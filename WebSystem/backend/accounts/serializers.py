from rest_framework.serializers import ModelSerializer
from .models import CustomUser

# カスタムユーザーの格納
class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            "userId",
            "username",
            "email",
            "password",
        ]
    # ユーザー作成機能
    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            validated_data["username"],
            validated_data["email"],
            validated_data["password"]
        )

        return user