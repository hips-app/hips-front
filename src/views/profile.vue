<template>
  <div>
    <div><navbar></navbar></div>
    <div class="hello">
      <h1>Profile data</h1>
    </div>
    <main class="container">
      <div class="popup">
        <div class="popup-content">
          <div class="form-group">
            <label class="cursor-pointer" htmlFor="file-input">
              <img
                class="profile-picture"
                :src="profilePicture"
                alt=""
                width="200"
                height="200"
              />
            </label>
            <div style="text-align: center">
              <h3 class="text-white pr-2 pt-2 pl-5">
                <b>First name:</b> {{ profileData.firstName }}
              </h3>
              <h3 class="text-white pr-2 pt-2 pl-5">
                <b>Last name:</b> {{ profileData.lastName }}
              </h3>
              <h3 class="text-white pr-2 pt-2 pl-5">
                <b>email:</b> {{ profileData.email }}
              </h3>
            </div>
            <div class="mt-5">
              <router-link to="personal-data">
                <button href="#0" class="popup-button w-100">Editar</button>
              </router-link>
            </div>
            <div v-if="subscription">
              <cancelsubs></cancelsubs>
            </div>
            <div v-else>
              <renovarSubs></renovarSubs>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div>
      <foot></foot>
    </div>
    <input
      id="file-input"
      type="file"
      accept="image/x-png,image/jpeg"
      className="d-none"
      lang="es"
      @change="onSetImage"
    />
  </div>
</template>
<script>
import navbar from '../components/navbar';
import foot from '../components/foot';
import cancelsubs from '../components/CancelSubs';
import { UserService } from '../services';
import { UserSubscriptionService } from '../services';
import { AuthController } from '../controllers';
import { FileProvider, FirebaseProvider } from '../providers';
import renovarSubs from '../components/RenovarSubs.vue';

export default {
  name: 'profile',
  data() {
    return {
      loading: true,
      profileData: {
        firstName: AuthController.currentAccount.firstName,
        lastName: AuthController.currentAccount.lastName,
        email: AuthController.currentAccount.email,
      },
      profilePicture: null,
      subscription: true,
    };
  },
  created() {
    UserSubscriptionService.hasSubscription(
      AuthController.currentAccount.id
    ).then((response) => (this.subscription = response));
  },
  mounted() {
    UserService.getProfile(AuthController.currentAccount.id)
      .then((profileData) => {
        this.profileData = profileData;
        this.loading = false;
        this.profilePicture =
          profileData.profilePicture == null || profileData.profilePicture == ''
            ? 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
            : profileData.profilePicture;
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
    foot,
    cancelsubs,
    renovarSubs,
  },
  methods: {
    setProfile(data) {
      this.nombre = data.data.name;
    },
    async onSetImage(event) {
      const file = event.target.files[0];
      const fileUrl = await FileProvider.getUrlFormFile(file);
      this.profilePicture = fileUrl;
      const logoUrl = await FirebaseProvider.uploadFile(
        FirebaseProvider.STORAGE_COMPANY_LOGOS_FOLDER,
        file
      );
      await UserService.setProfilePicture(logoUrl);
      alert('Imagen actializada con exito');
    },
  },
};
</script>
<style>
.profile-picture {
  border-radius: 100px;
  background-color: white;
  margin-bottom: 20px;
}
</style>
