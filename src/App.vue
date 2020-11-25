<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <router-view v-else />
  <food-schedule v-if="false"></food-schedule>
  <schedule v-if="false"></schedule>
  <check-exercises v-if="false"></check-exercises>
  <check-foods v-if="false"></check-foods>
  <specialist-users v-if="false"></specialist-users>
</template>
<script>
import { AuthController } from './controllers';
import { HttpProvider, FirebaseProvider } from './providers';
import { AuthService } from './services';
import CheckExercises from './views/CheckExercises';
import CheckFoods from './views/CheckFoods';
import FoodSchedule from './views/FoodSchedule';
import Schedule from './views/Schedule';
import SpecialistUsers from './views/SpecialistUsers';
FirebaseProvider.init();
export default {
  name: 'App',
  components: {
    CheckExercises,
    CheckFoods,
    FoodSchedule,
    Schedule,
    SpecialistUsers
  },
  data() {
    return { loading: true };
  },
  mounted() {
    HttpProvider.setDefaultHeaders();
    const token = localStorage.getItem('token');
    if (token) {
      AuthService.loginWithToken(token)
        .then(accountData => {
          AuthController.setAccount(accountData);
          if (this.$route.path == '/' || this.$route.path == '/sign-up') {
            this.$router.push('/schedule');
          }
        })
        .catch(error => {
          console.log(error);
          HttpProvider.removeSessionCredentials();
          this.$router.push('/?redirect=' + this.$route.path);
        })
        .finally(() => {
          this.loading = false;
          AuthController.hasLoaded = true;
        });
    } else {
      this.loading = false;
      AuthController.hasLoaded = true;
    }
  }
};
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
