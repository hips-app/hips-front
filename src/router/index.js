import { createRouter, createWebHistory } from 'vue-router';

import FourFour from '../views/404.vue';
import Login from '../views/Login.vue';
import RegisterPersonal from '../views/RegisterPersonal.vue';
import Schedule from '../views/Schedule.vue';
import SignUp from '../views/SignUp.vue';
import metas from '../views/metas.vue';
import next from '../views/next.vue';
import profile from '../views/profile.vue';
import { AuthController } from '../controllers';

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
  )
    next({ name: 'Login' });
  else next();
});
export default router;
