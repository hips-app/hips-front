<template>
  <div><navbar></navbar></div>
  <div class="hello">
    <h1>Perfil de usuario</h1>
  </div>
  <main class="container  ">
    <div class="popup">
      <div class="popup-content">
        <div class="form-group ">
          <div style="text-align:center">
            <h1 class="text-white pr-2 pt-2 pl-5">
              First name: {{ profileData.firstName }}
            </h1>
            <h1 class="text-white pr-2 pt-2 pl-5">
              Last name: {{ profileData.lastName }}
            </h1>
            <h1 class="text-white pr-2 pt-2 pl-5">
              email: {{ profileData.email }}
            </h1>
          </div>
          <div style="text-align:center">
            <router-link to="personal-data">
              <button href="#0" class="popup-button">
                Editar
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </main>
  <div>
    <foot></foot>
  </div>
</template>

<script>
import navbar from '../components/navbar';
import foot from '../components/foot';
import { UserService } from '../services';
import { AuthController } from '../controllers';

export default {
  name: 'profile',
  data() {
    return {
      loading: true,
      profileData: {
        firstName: AuthController.currentAccount.firstName,
        lastName: AuthController.currentAccount.lastName,
        email: AuthController.currentAccount.email
      }
    };
  },
  mounted() {
    UserService.getProfile(AuthController.currentAccount.id)
      .then(profileData => {
        this.profileData = profileData;
        this.loading = false;
        AuthController.currentAccount.firstName = profileData.firstName;
        AuthController.currentAccount.lastName = profileData.lastName;
        AuthController.currentAccount.email = profileData.email;
      })
      .catch(() => {
        alert('there was an error fetching user data');
      });
  },
  components: {
    navbar,
    foot
  },
  methods: {
    setProfile(data) {
      this.nombre = data.data.name;
    }
  }
};
</script>
