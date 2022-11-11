from django.contrib.auth.models import User
from rest_framework import serializers

from question.models import Question


class QuestionCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'title', 'content', 'author', 'created_at')


class AuthorSerializer(serializers.ModelSerializer):
    answer_amount = serializers.SerializerMethodField(read_only=True)
    question_amount = serializers.SerializerMethodField(read_only=True)
    up_amount = serializers.SerializerMethodField(read_only=True)
    avatar = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'first_name', 'answer_amount', 'question_amount', 'up_amount', 'avatar')

    def get_answer_amount(self, obj):
        return 2

    def get_question_amount(self, obj):
        return Question.objects.filter(author_id=obj.id).count()

    def get_up_amount(self, obj):
        return 21

    def get_avatar(self, obj):
        return '/moonbird.png'


class QuestionListSerializer(QuestionCreateSerializer):
    author = AuthorSerializer(read_only=True)

    class Meta:
        model = Question
        fields = ('id', 'title', 'content', 'author', 'created_at')
