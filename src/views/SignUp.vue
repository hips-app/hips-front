<template>
  <div class="container">
    <img class="hips-svg" src="./../assets/undraw_nature_fun_n9lv.svg" alt="img" />
    <div class="popup">
      <div class="popup-content">
        <p>Welcome!</p>
        <h2 class="popup-title">Sign in to <span id="hips">Hips</span></h2>
        <form class="mt-4" @submit.prevent="signup">
          <div class="alert alert-danger" v-if="error">{{ error }}</div>
          <div class="group">
            <input
              v-model="firstName"
              class="form-control"
              type="text"
              required
              autofocus
              id="inputFirstName"
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="label">First name</label>
          </div>
          <div class="group">
            <input
              v-model="lastName"
              class="form-control"
              type="text"
              required
              id="inputLastName"
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="label">Last name</label>
          </div>
          <div class="group">
            <input v-model="email" class="form-control" type="email" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="label">Email</label>
          </div>
          <div class="group">
            <input
              v-model="password"
              class="form-control"
              type="password"
              required
              id="inputPassword"
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="label">Password</label>
          </div>
          <button ref="#0" class="popup-button" type="submit">Sign up</button>
        </form>
        <router-link to="/" id="btn-2" class="popup-button">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { AccountTypesEnum } from '../commons/enums'
import { AuthController } from '../controllers'
import { UserService } from '../services'
export default {
  name: 'SignUp',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      error: false,
    }
  },
  methods: {
    async signup() {
      try {
        const accountData = await UserService.register(
          this.firstName,
          this.lastName,
          this.email,
          this.password
        )
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
  },
  components: {},
}
</script>

<style scoped>
* {
  font-family: 'Ubuntu', sans-serif;
}

.popup {
  position: absolute;
}

.hips-svg {
  position: relative;
  z-index: -1;
  height: 75vh;
  left: -300px;
  animation: scale-animation 3s infinite;
}

@media only screen and (max-width: 1050px) {
  .hips-svg {
    display: none;
  }
}

@media only screen and (min-width: 800px) {
  .popup {
    margin-left: 40vw;
  }
}

@keyframes scale-animation {
  50% {
    transform: scale(1.04);
  }
}
</style>
