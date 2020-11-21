<template>
  <form @submit.prevent="saveData">
    <div class="group">
      <input type="text" v-model="firstName" />
      <span class="highlight"></span><span class="bar"></span>
      <label class="label">First Name</label>
    </div>
    <div class="group">
      <input type="text" v-model="lastName" />
      <span class="highlight"></span><span class="bar"></span>
      <label class="label">Last Name</label>
    </div>
    <div class="group">
      <input type="number" v-model="weight" />
      <span class="highlight"></span><span class="bar"></span>
      <label class="label">Weight (kg)</label>
    </div>
    <div class="group">
      <input type="number" v-model="height" />
      <span class="highlight"></span><span class="bar"></span>
      <label class="label">Height (cm)</label>
    </div>
    <span class="">Birth date</span>
    <div class="group">
      <input v-model="birthDate" type="date" required />
      <span class="highlight"></span><span class="bar"></span>
    </div>
    <button class="button buttonBlue" v-on:click="sendHealthData()">
      SAVE PERSONAL DATA
    </button>
  </form>
</template>

<script>
import { AuthController } from '../controllers';
import { UserService } from '../services';
export default {
  data() {
    return {
      firstName: AuthController.currentAccount.firstName,
      lastName: AuthController.currentAccount.lastName,
      weight: null,
      height: null,
      birthDate: null
    };
  },
  methods: {
    async sendHealthData() {
      try {
        console.log(this.birthDate);
        if (
          !(
            this.weight &&
            this.height &&
            this.birthDate &&
            this.lastName &&
            this.firstName
          )
        ) {
          alert('Please fill all fields');
          return;
        }
        await UserService.updatePersonalData(
          this.firstName,
          this.lastName,
          this.weight,
          this.height,
          this.birthDate
        );
        AuthController.currentAccount.firstName = this.firstName;
        AuthController.currentAccount.lastName = this.lastName;
        this.$router.replace('goal');
      } catch (error) {
        alert('Ha ocurrido un error');
      }
    }
  }
};
</script>

<style scoped>
* {
  font-family: 'Raleway', Sans-serif;
  font-weight: 900;
}
form {
  width: 380px;
  margin: 4em auto;
  padding: 3em 2em 2em 2em;
  border-radius: 5px;
  background: #fafafa;
  box-shadow: 1px 1px 5px rgb(47, 79, 79);
}

.group {
  position: relative;
  margin-bottom: 45px;
}

input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  -webkit-appearance: none;
  display: block;
  background: #fafafa;
  color: #636363;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #757575;
}

input:focus {
  outline: none;
}

/* Label */

label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: all 0.2s ease;
}

/* active */

input:focus ~ label,
input.used ~ label {
  top: -20px;
  transform: scale(0.75);
  left: -2px;
  /* font-size: 14px; */
  color: #4a89dc;
}

/* Underline */

.bar {
  position: relative;
  display: block;
  width: 100%;
}

.bar:before,
.bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #4a89dc;
  transition: all 0.2s ease;
}

.bar:before {
  left: 50%;
}

.bar:after {
  right: 50%;
}

/* active */

input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}

/* Highlight */

.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* active */

input:focus ~ .highlight {
  animation: inputHighlighter 0.3s ease;
}

/* Animations */

@keyframes inputHighlighter {
  from {
    background: #4a89dc;
  }
  to {
    width: 0;
    background: transparent;
  }
}

/* Button */

.button {
  position: relative;
  display: inline-block;
  padding: 12px 24px;
  margin: 0.3em 0 1em 0;
  width: 100%;
  vertical-align: middle;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  letter-spacing: 1px;
  /* background: transparent; */
  border: 0;
  cursor: pointer;
  transition: all 0.15s ease;
}
.button:focus {
  outline: 0;
}

/* Button modifiers */

.buttonBlue {
  background-color: rgb(0, 206, 209);
  border-radius: 5px;
}

.buttonBlue:hover {
  background: #357bd8;
}
</style>
