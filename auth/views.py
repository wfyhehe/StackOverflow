import logging

from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response

from auth.serializers import AuthCustomTokenSerializer

logger = logging.getLogger(__name__)


class MyObtainAuthToken(ObtainAuthToken):
    def delete(self, request, *args, **kwargs):
        try:
            request.user.auth_token.delete()
        except Exception:
            return Response({})
        logger.info(f'username={request.user.username}, email={request.user.email}, sign out '
                    f'succeeded')
        return Response({})

    def post(self, request, *args, **kwargs):
        serializer = AuthCustomTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        logger.info(f'username={user.username}, email={user.email}, sign in succeeded')
        return Response({'token': token.key})


obtain_auth_token = MyObtainAuthToken.as_view()
