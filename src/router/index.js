import { createRouter, createWebHistory } from 'vue-router';

import { AuthController } from '../controllers';
import CheckExercises from '../views/CheckExercises';
import CheckFoods from '../views/CheckFoods';
import ExpertCom from '../views/ExpertCom.vue'
import FoodSchedule from '../views/FoodSchedule';
import FourFour from '../views/404.vue';
import Login from '../views/Login.vue';
import RegisterPersonal from '../views/RegisterPersonal.vue';
import Schedule from '../views/Schedule.vue';
import SignUp from '../views/SignUp.vue';
import SpecialistUsers from '../views/SpecialistUsers';
import metas from '../views/metas.vue';
import next from '../views/next.vue';
import profesionales from '../views/profesionals.vue';
import profile from '../views/profile.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/next',
    name: 'next',
    component: next
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/food-schedule',
    name: 'FoodSchedule',
    component: FoodSchedule
  },
  {
    path: '/check-exercises',
    name: 'CheckExercises',
    component: CheckExercises
  },
  { path: '/check-foods', name: 'CheckFoods', component: CheckFoods },
  {
    path: '/specialist-users',
    name: 'SpecialistUsers',
    component: SpecialistUsers
  },
  {
    path: '/personal-data',
    name: 'RegisterPersonal',
    component: RegisterPersonal
  },
  {
    path: '/goal',
    name: 'regMetas',
    component: metas
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/profesionales',
    name: 'profesionales',
    component: profesionales
  },
  {
    path: '/ExpertCom',
    name: 'ExpertCom',
    component: ExpertCom
  },
  {
    path: '/*',
    name: '404',
    component: FourFour
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (
    to.name !== 'Login' &&
    to.name !== 'SignUp' &&
    !AuthController.isAuthenticated &&
    AuthController.hasLoaded
  ) {
    next({ name: 'Login' });
  } else if (
    (to.name == 'Login' || to.name == 'SignUp') &&
    AuthController.isAuthenticated &&
    AuthController.hasLoaded
  ) {
    next({ name: 'Schedule' });
  } else next();
});
export default router;
