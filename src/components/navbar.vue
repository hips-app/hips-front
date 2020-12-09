<template>
<div>
  <div class="navbar navbar-expand-lg navbar-dark" style="background-color: #620500;">
    <a class="navbar-brand" href="/">
      <img
          v-if="showProgress"
          class="profile-picture"
          :src="profilePicture"
          width="50"
          height="50"
      />HIPS APP
    </a>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-if="show">
      <li class="nav-item">
        <percentagebar v-if="showProgress"></percentagebar>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">
          <registroMeta v-if="showProgress" aria-current="page" href="#"></registroMeta>  
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">
          <router-link to="/DailyCalories"
              style="position: relative; left:5px"
              class="text-white pr-2 pt-2 pl-2"
              aria-current="page"
              href="/"
          >Calories | </router-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">
          <router-link to="/ExpertCom" class="text-white pr-2 pt-2 pl-2" aria-current="page" href="#">
              {{smsText}}
          </router-link>
        </a>
      </li>
      <li class="nav-item">
        <div class="container-fluid">
        <router-link to="/profile">
            <p id="user" class="text-white pr-2 pt-2 pl-2">
             {{ userName }}
            </p>
        </router-link>
        <button href="#0" v-on:click="logout()" style="position: absolute; right:100px">
          logout
        </button>
        </div>
      </li>
    </ul>
    <div class="container-fluid">

    <button class="navbar-toggler" type="button" v-on:click="showCaloriesForm()" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">
      </span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <registroMeta v-if="showProgress" aria-current="page" href="#"></registroMeta>  
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
          <router-link to="/DailyCalories"
              style="position: relative; left:5px"
              class="text-white pr-2 pt-2 pl-2"
              aria-current="page"
              href="/"
          >Calories | </router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
          <router-link to="/ExpertCom" class="text-white pr-2 pt-2 pl-2" aria-current="page" href="#">
              {{smsText}}
          </router-link>
          </a>
        </li>
      </ul>
        <div style="position: absolute; right:5px">
          <router-link to="/profile">
            <p id="user" class="text-white pr-2 pt-2 pl-2">
             {{ userName }}
            </p>
            <percentagebar v-if="showProgress"></percentagebar>
          </router-link>
        </div>
        <button href="#0" class="btn btn-primary" v-on:click="logout()" style="position: absolute; right:100px">
          logout
        </button>
    </div>
    </div>
  </div>
</div>
</template>
<script>
import { UserService } from '../services';
import { AuthController } from '../controllers';
import { HttpProvider } from '../providers';
import { AuthService } from '../services';
// eslint-disable-next-line no-undef
import registroMeta from './registroMeta';
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
