<template>
  <div class="container">
    <div class="popup">
      <div class="popup-content">
        <p>Welcome!</p>
        <h2 class="popup-title">Sign in to <span id="hips">Hips</span></h2>
        <form class="form-signin" @submit.prevent="login">
          <div class="alert alert-danger" v-if="error">{{ error }}</div>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            v-model="email"
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            v-model="password"
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
          />
          <button href="#0" class="popup-button" type="submit">Sign in</button>
        </form>
        <router-link to="sign-up" id="btn-2" class="popup-button">
          Sign up
        </router-link>
        <a href="#0" class="popup-button">Sign in with Google</a>
      </div>
    </div>
  </div>
</template>

<script>
import { AuthRepository } from '../repositories'
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: false
    }
  },
  created() {
    this.checkCurrentLogin()
  },
  updated() {
    this.checkCurrentLogin()
  },
  methods: {
    checkCurrentLogin() {
      if (localStorage.token) {
        this.$router.replace(this.$route.query.redirect || '/next')
      }
    },
    async login() {
      localStorage.token = await AuthRepository.login(this.email, this.password)
      if (localStorage.token) {
        this.loginSuccessful
      }
      localStorage.user = await AuthRepository.currentUser(localStorage.token)
    },
    loginSuccessful(req) {
      if (!req.data.token) {
        this.loginFailed()
        return
      }
      localStorage.token = req.data.token
      this.error = false
      this.$router.replace(this.$route.query.redirect || '/next')
    },
    loginFailed() {
      this.error = 'Login failed!'
      delete localStorage.token
    }
  },
  components: {}
}
</script>
