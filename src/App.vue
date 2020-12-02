<template>
  <!-- <div v-if="loading" class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <router-view v-else /> -->
  <users-progress v-if="false"></users-progress>
  <user-statistics v-if="false"></user-statistics>
  <food-schedule v-if="false"></food-schedule>
  <schedule v-if="false"></schedule>
  <check-exercises v-if="false"></check-exercises>
  <check-foods v-if="false"></check-foods>
  <specialist-users v-if="false"></specialist-users>
  <login v-if="true"></login>
  <signup v-if="false"></signup>
  <register-personal v-if="false"></register-personal>
  <profile v-if="false"></profile>
  <profesionals v-if="false"></profesionals>
  <metas v-if="false"></metas>
  <not-found v-if="false"></not-found>
</template>
<script>
import { AuthController } from './controllers'
import { HttpProvider, FirebaseProvider } from './providers'
import { AuthService } from './services'
import CheckExercises from './views/CheckExercises'
import CheckFoods from './views/CheckFoods'
import FoodSchedule from './views/FoodSchedule'
import Login from './views/Login'
import Signup from './views/SignUp'
import Schedule from './views/Schedule'
import SpecialistUsers from './views/SpecialistUsers'
import UsersProgress from './views/UsersProgress'
import UserStatistics from './views/UserStatistics'
import RegisterPersonal from './views/RegisterPersonal.vue'
import profile from './views/profile'
import Profesionals from './views/profesionals.vue'
import metas from './views/metas.vue'
import NotFound from './views/404.vue'

FirebaseProvider.init()
export default {
  name: 'App',
  components: {
    CheckExercises,
    CheckFoods,
    FoodSchedule,
    Login,
    profile,
    Signup,
    metas,
    Schedule,
    SpecialistUsers,
    UsersProgress,
    UserStatistics,
    RegisterPersonal,
    Profesionals,
    NotFound,
  },
  data() {
    return { loading: true }
  },
  mounted() {
    HttpProvider.setDefaultHeaders()
    const token = localStorage.getItem('token')
    if (token) {
      AuthService.loginWithToken(token)
        .then(accountData => {
          AuthController.setAccount(accountData)
          if (this.$route.path == '/' || this.$route.path == '/sign-up') {
            this.$router.push('/schedule')
          }
        })
        .catch(error => {
          console.log(error)
          HttpProvider.removeSessionCredentials()
          this.$router.push('/?redirect=' + this.$route.path)
        })
        .finally(() => {
          this.loading = false
          AuthController.hasLoaded = true
        })
    } else {
      this.loading = false
      AuthController.hasLoaded = true
    }
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
