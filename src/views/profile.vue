<template>
  <div><navbar></navbar></div>
  <div id="header">MY PROFILE</div>
  <main class="container">
    <img
      class="hips-svg"
      src="./../assets/undraw_Profile_data_re_v81r.svg"
      alt="img"
    />
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
              <button href="#0" class="popup-button w-100">
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

  <input
    id="file-input"
    type="file"
    accept="image/x-png,image/jpeg"
    className="d-none"
    lang="es"
    @change="onSetImage"
  />
</template>
<script>
import navbar from '../components/navbar';
import foot from '../components/foot';
import { UserService } from '../services';
import { UserSubscriptionService } from '../services';
import { AuthController } from '../controllers';
import { FileProvider, FirebaseProvider } from '../providers';

export default {
  name: 'profile',
  data() {
    return {
      loading: true,
      profileData: {
        firstName: AuthController.currentAccount.firstName,
        lastName: AuthController.currentAccount.lastName,
        email: AuthController.currentAccount.email
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
* {
  font-family: 'Ubuntu', sans-serif;
}

.profile-picture {
  border-radius: 100px;
  background-color: white;
  margin-bottom: 20px;
}

#header {
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: white;
  letter-spacing: 10px;
  background: linear-gradient(to right, #ff5f6d, #ffc371);
  box-shadow: 0px 1px 5px rgb(47, 79, 79);
  margin-bottom: 10px;
}

.popup {
  position: absolute;
}

.hips-svg {
  position: relative;
  z-index: -1;
  height: 55vh;
  left: -300px;
}

@media only screen and (min-width: 800px) {
  .popup {
    margin-left: 40vw;
  }
}
</style>
