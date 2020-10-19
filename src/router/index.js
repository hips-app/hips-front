import { createRouter, createWebHistory } from 'vue-router';

import FourFour from '../views/404.vue'
import Login from '../views/Login.vue'
import Logout from '../components/logout.vue'
import SignUp from '../views/SignUp.vue'
import healthData from '../views/healthData.vue'
import next from '../views/next.vue'

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
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
<<<<<<< HEAD
    path: '/*',
    name: '404',
    component: FourFour
=======
    path: '/healthData',
    name: 'healthData',
    component: healthData
>>>>>>> a5456b5eb8ca3839c01ddef30dd9d261a7122636
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
