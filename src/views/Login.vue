<template>
  <div class="container">
    <img class="hips-svg" src="./../assets/undraw_workout_gcgu.svg" alt="img" />
    <div class="popup">
      <div class="popup-content">
        <p>Welcome!</p>
        <h2 class="popup-title">Sign in to <span id="hips">Hips</span></h2>
        <form class="form-signin" @submit.prevent="login">
          <div class="alert alert-danger" v-if="error">{{ error }}</div>
          <label class="label sr-only" for="inputEmail">Email address</label>
          <input
            v-model="email"
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <label class="label sr-only" for="inputPassword">Password</label>
          <input
            v-model="password"
            type="password"
            id="inputPassword"
            class="form-control mt-3"
            placeholder="Password"
            required
          />
          <div style="text-align: center">
            <button href="#0" class="popup-button" type="submit">
              Sign in
            </button>
          </div>
        </form>
        <router-link to="sign-up" id="btn-2" class="popup-button">
          Sign up
        </router-link>
        <div id="google-signin-button"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { AuthController } from '../controllers'
import { AuthService } from '../services'
import { AccountTypesEnum } from '../commons/enums'
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: false,
    }
  },
  mounted() {
    window.gapi.signin2.render('google-signin-button', {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark',
      onsuccess: this.onGoogleSignIn,
    })
  },
  methods: {
    async login() {
      try {
        const accountData = await AuthService.login(this.email, this.password)
        AuthController.setAccount(accountData)
        if (accountData.accountType == AccountTypesEnum.SPECIALIST) {
          this.$router.replace(this.$route.query.redirect || '/next')
        } else {
          this.$router.replace(this.$route.query.redirect || '/personal-data')
        }
      } catch (error) {
        alert('Incorrect credentials')
      }
    },
    async onGoogleSignIn(user) {
      const profile = user.getBasicProfile()
      try {
        const accountData = await AuthService.loginWithGoogle(
          profile.getEmail(),
          profile.getId()
        )
        AuthController.setAccount(accountData)
        if (accountData.accountType == AccountTypesEnum.SPECIALIST) {
          this.$router.replace(this.$route.query.redirect || '/next')
        } else {
          this.$router.replace(this.$route.query.redirect || '/personal-data')
        }
      } catch (error) {
        alert('Debes registrarte primero para poder iniciar sesión con google')
        var auth2 = window.gapi.auth2.getAuthInstance()
        auth2.signOut().then(function() {
          console.log('User signed out.')
        })
      }
    },
  },
  components: {},
}
</script>
<style scoped>
* {
  font-family: 'Ubuntu';
}

.popup {
  position: absolute;
}

.hips-svg {
  position: relative;
  z-index: -1;
  height: 75vh;
  left: -300px;
}

@media only screen and (min-width: 800px) {
  .popup {
    margin-left: 30vw;
    margin-top: 10vh;
  }
}
</style>
