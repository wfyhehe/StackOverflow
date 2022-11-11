from rest_framework import viewsets, permissions

from question.models import Question
from question.permissions import QuestionPermission
from question.serializers import QuestionSerializer


class QuestionViewSet(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()
    permission_classes = [QuestionPermission]
