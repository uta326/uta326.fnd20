from rest_framework import generics
from .serializers import PostSerializer
from .models import Post
from rest_framework.permissions import AllowAny

class PostView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (AllowAny,) # Loginユーザ以外も見れるようにする


class PostDetailView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (AllowAny,)