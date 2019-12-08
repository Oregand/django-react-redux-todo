from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import TodoSerializer      # add this
from .models import Todo   

# Create your views here.

class TodoView(viewsets.ModelViewSets):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()