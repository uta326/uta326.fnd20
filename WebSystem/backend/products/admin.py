from django.contrib import admin
from django.forms import DateInput, DateTimeInput
from .models import Post

admin.site.register(Post)# Postモデルの追加
