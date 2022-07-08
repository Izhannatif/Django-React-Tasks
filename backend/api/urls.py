from django.urls import path
from . import views
urlpatterns = [
    path('tasks-list/',views.TasksList, name='tasks-list'),
    path('task-details/<str:pk>',views.TaskDetails, name='task-details'),
    path('create-task/',views.CreateTask, name='create-task'),
    path('delete-task/<str:pk>',views.DeleteTask, name='delete-task'),
    path('update-task/<str:pk>',views.UpdateTask, name='update-task'),
    
];