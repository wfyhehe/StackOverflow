from rest_framework import permissions


class QuestionPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        if view.action == 'create':
            return request.user.is_authenticated
        if view.action == 'list':
            return True
        if view.action == 'delete':
            return request.user.is_staff
        return True

    def has_object_permission(self, request, view, obj):
        if request.user.is_superuser or request.user.is_staff:
            return True
        return (request.method in permissions.SAFE_METHODS) or (obj.user == request.user)
