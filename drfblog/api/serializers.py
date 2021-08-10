from rest_framework import serializers
from django.contrib.auth import get_user_model

from posts.models import Post



class NestedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['id','username']

class NestedPostSerializer(serializers.ModelSerializer):
    author = NestedUserSerializer(read_only=True)
    class Meta:
        model = Post
        fields = ['id','title','body','created','updated','author']

class PostSerializer(serializers.ModelSerializer):
    author_detail = NestedUserSerializer(source='author', read_only=True)
    class Meta:
        model = Post
        fields = ['id','title','author','body','created','updated', 'author_detail']

class UserSerializer(serializers.ModelSerializer):
    post_detail = NestedPostSerializer(read_only=True, many=True, source='post_set')
    class Meta: 
        model = get_user_model()
        fields = ['id','username','date_joined','post_set','post_detail']


