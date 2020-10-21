<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a class="navbar-brand" href="/">HIPS APP</a>
    <registroMeta style="position:relative; left:50px;"></registroMeta>
    <div className="mr-auto"></div>
    <router-link to="/profile">
      <p id="user" class="text-white pr-2 pt-2 pl-5">
        {{ userName }} ({{ userEmail }})
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
export default {
  name: 'Navbar',
  data() {
    return {
      userName: AuthController.currentAccount.firstName,
      userEmail: AuthController.currentAccount.email
    };
  },
  components: {
    registroMeta
  },
  methods: {
    logout() {
      AuthService.logout();
      HttpProvider.removeSessionCredentials();
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss" scoped>
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
