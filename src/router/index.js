import { createRouter, createWebHistory } from 'vue-router'

import FourFour from '../views/404.vue'
import Login from '../views/Login.vue'
import Logout from '../components/logout.vue'
import ModifyPersonal from '../views/ModifyPersonal.vue'
import RegisterPersonal from '../views/RegisterPersonal.vue'
import Schedule from '../views/Schedule.vue'
import SignUp from '../views/SignUp.vue'
import healthData from '../views/healthData.vue'
import metas from '../views/metas.vue'
import next from '../views/next.vue'
import profile from '../views/profile.vue'

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
    path: '/*',
    name: '404',
    component: FourFour
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/modify-personal',
    name: 'ModifyPersonal',
    component: ModifyPersonal
  },
  {
    path: '/register-personal',
    name: 'RegisterPersonal',
    component: RegisterPersonal
  },
  {
    path: '/healthData',
    name: 'healthData',
    component: healthData
  },
  {
    path: '/regMeta',
    name: 'regMetas',
    component: metas
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
