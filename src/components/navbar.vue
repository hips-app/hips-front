<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a class="navbar-brand" href="/">HIPS APP</a>
    <registroMeta v-if="showProgress"></registroMeta>
    <div v-if="showProgress">
      <div v-if="show">
        <DailyCalories
          style="position: relative; left: 100px"
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
    <router-link to="/ExpertCom" class="text-white pr-2 pt-2 pl-2">
      {{smsText}}
    </router-link>
    <div className="mr-auto"></div>
    <router-link to="/profile">
      <section>
        <div :style="image" class="image"></div>
        <img
          v-if="showProgress"
          class="profile-picture"
          :src="profilePicture"
          alt="2"
          width="50"
          height="50"
        />
      </section>
      <p id="user" class="text-white pr-2 pt-2 pl-2">
        {{ userName }}
      </p>
      <percentagebar v-if="showProgress"></percentagebar>
    </router-link>
    <button href="#0" class="btn btn-primary" v-on:click="logout()">
      logout
    </button>
  </nav>
</template>
<script>
import { UserService } from '../services';
import { AuthController } from '../controllers';
import { HttpProvider } from '../providers';
import { AuthService } from '../services';
// eslint-disable-next-line no-undef
import registroMeta from './registroMeta';
import DailyCalories from './DailyCalories';
import percentagebar from './percentagebar';
import { AccountTypesEnum } from '../commons/enums';
export default {
  name: 'Navbar',
  data() {
    return {
      userName: AuthController.currentAccount.firstName,
      userEmail: AuthController.currentAccount.email,
      show: false,
      profilePicture: null,
      smsText:
        AuthController.currentAccount.type == AccountTypesEnum.USER
          ? 'Comunicarse con experto'
          : 'Comunicarse con usuario',
      showProgress: AuthController.currentAccount.type == AccountTypesEnum.USER,
    };
  },
  mounted() {
    if (AuthController.currentAccount.type == AccountTypesEnum.USER) {
      UserService.getProfile(AuthController.currentAccount.id)
        .then((profileData) => {
          this.profilePicture =
            profileData.profilePicture == null ||
            profileData.profilePicture == ''
              ? 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
              : profileData.profilePicture;
        })
        .catch(() => {
          alert('there was an error fetching user data');
        });
    }
  },
  components: {
    registroMeta,
    DailyCalories,
    percentagebar,
  },
  methods: {
    showCaloriesForm() {
      this.show = !this.show;
    },
    logout() {
      AuthService.logout();
      HttpProvider.removeSessionCredentials();
      this.$router.push('/');
    },
  },
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
