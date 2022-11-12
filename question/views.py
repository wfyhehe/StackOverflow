import logging
from rest_framework import viewsets, status
from rest_framework.response import Response
from question.models import Question
from question.permissions import QuestionPermission
from question.serializers import QuestionListSerializer, QuestionCreateSerializer

logger = logging.getLogger(__name__)


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
        question = serializer.data
        logger.info(
            f'Created new question title={question["title"]}, author={request.user.username}')
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
