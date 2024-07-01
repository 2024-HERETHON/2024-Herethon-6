<<<<<<< HEAD
# profiles/urls.py

from django.urls import path
from .views import *

app_name = 'profiles'

urlpatterns = [
    path('role/', RoleChoiceView.as_view(), name='role_choice'),
    path('signup/', SignUpView.as_view(), name='signup'),
    # 세부사항 설정할 수 있게끔
    path('profile_setup/', ProfileSetupView.as_view(), name = 'profile_setup'),
    path('skill_selection/', SkillSelectionView.as_view(), name='skill_selection'),
    # 내 프로필 들어가면 username에 맞는 프로필이 views함수에 의해 템플릿이 렌더링 된다.
    path('profile/learner/<str:username>/', learner_profile_view, name='learner_profile'),
    path('profile/teacher/<str:username>/', teacher_profile_view, name='teacher_profile'),
        # 프로필 수정부분 들어가면 티쳐와 러너 각각에 다른 수정필드가 등장
    path('profile/learner/edit/', learner_profile_edit_view, name='learner_profile_edit'),
    path('profile/teacher/edit/', teacher_profile_edit_view, name='teacher_profile_edit'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
]



=======
from django.urls import path
from .views import *

app_name = 'profiles'

urlpatterns = [
    path('learner/<int:id>/', show_learner_profile, name='show_learner_profile'),
    path('learner/<int:id>/updateprofile/', update_learner_profile, name='update_learner_profile'),
    path('learner/<int:id>/updatedetails/', update_learner_details, name='update_learner_details'),

    path('teacher/<int:id>/', show_teacher_profile, name='show_teacher_profile'),
    path('teacher/<int:id>/updateprofile/', update_teacher_profile, name='update_teacher_profile'),
    path('teacher/<int:id>/updatedetails/', update_teacher_details, name='update_teacher_details'),

]
>>>>>>> cfabd5778b58d5bb7907903a32c316cee0386ee3
