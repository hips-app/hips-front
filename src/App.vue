<template>
  <!-- <div v-if="loading" class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <router-view v-else /> -->
  <check-exercises v-if="true"></check-exercises>
  <specialist-users v-if="false"></specialist-users>
</template>
<script>
import { AuthController } from './controllers'
import { HttpProvider } from './providers'
import { AuthService } from './services'
import CheckExercises from './views/CheckExercises'
import SpecialistUsers from './views/SpecialistUsers'
export default {
  name: 'App',
  components: {
    CheckExercises,
    SpecialistUsers
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
  }
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
