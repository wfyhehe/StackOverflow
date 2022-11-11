from rest_framework import viewsets, status
from rest_framework.response import Response

from question.models import Question
from question.permissions import QuestionPermission
from question.serializers import QuestionListSerializer, QuestionCreateSerializer


class QuestionViewSet(viewsets.ModelViewSet):
    serializer_class = QuestionListSerializer
    queryset = Question.objects.all()
    permission_classes = [QuestionPermission]

    def create(self, request, *args, **kwargs):
        user = request.user
        request.data['author'] = user.id
        serializer = QuestionCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
