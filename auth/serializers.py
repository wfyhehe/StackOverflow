from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.core import exceptions
from django.core.validators import validate_email
from django.shortcuts import get_object_or_404
from rest_framework import serializers
from django.utils.translation import gettext_lazy as _


class AuthCustomTokenSerializer(serializers.Serializer):
    email_or_username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        email_or_username = attrs.get('email_or_username')
        password = attrs.get('password')

        if not (email_or_username and password):
            msg = _('Must include "email or username" and "password"')
            raise exceptions.ValidationError(msg)
        # Check if user sent email
        try:
            validate_email(email_or_username)
            user_request = get_object_or_404(
                User,
                email=email_or_username,
            )
            email_or_username = user_request.username
        except exceptions.ValidationError:
            pass
        user = authenticate(username=email_or_username, password=password)

        if user:
            if not user.is_active:
                msg = _('User account is disabled.')
                raise exceptions.ValidationError(msg)
        else:
            msg = _('Unable to log in with provided credentials.')
            raise exceptions.ValidationError(msg)

        attrs['user'] = user
        return attrs
