<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a class="navbar-brand" href="/">HIPS APP</a>
    <registroMeta></registroMeta>
    <div>
      <div v-if="show">
        <DailyCalories
          style="position:relative; left:100px;"
          v-on:finish-task="showCaloriesForm()"
        ></DailyCalories>
      </div>
      <div v-else style="pl-2">
        <a
          v-on:click.stop.prevent="showCaloriesForm()"
          class="text-white pr-2 pt-2 pl-2"
          href=""
          aria-expanded="true"
        >
          Calories |
        </a>
      </div>
    </div>
    <div className="mr-auto"></div>
    <router-link to="/profile">
      <p id="user" class="text-white pr-2 pt-2 pl-2">
        {{userName}}
      </p>
    </router-link>
    <button href="#0" class="btn btn-primary" v-on:click="logout()">
      logout
    </button>
  </nav>
</template>

<script>
import { AuthController } from '../controllers';
import { HttpProvider } from '../providers';
import { AuthService } from '../services';
// eslint-disable-next-line no-undef
import registroMeta from './registroMeta';
import DailyCalories from './DailyCalories';
export default {
  name: 'Navbar',
  data() {
    return {
      userName: AuthController.currentAccount.firstName,
      userEmail: AuthController.currentAccount.email,
      show: false
    };
  },
  components: {
    registroMeta,
    DailyCalories
  },
  methods: {
    showCaloriesForm() {
      this.show = !this.show;
    },
    logout() {
      AuthService.logout();
      HttpProvider.removeSessionCredentials();
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.btn-logout {
  background-color: #837a75;
  border-color: #837a75;
  color: #fff;
}

.btn-logout:hover {
  background-color: #31302f;
  border-color: #31302f;
  color: #fff;
}
</style>
