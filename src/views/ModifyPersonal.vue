<template>
  <div>
    <div>
      <navbar></navbar>
    </div>
    <div id="header">
      MODIFY PERSONAL DATA
    </div>
    <div>
      <form @submit.prevent="saveData">
        <div class="group">
          <input type="text" v-model="name" /><span class="highlight"></span
          ><span class="bar"></span>
          <label>Name</label>
        </div>
        <div class="group">
          <input type="text" v-model="email" /><span class="highlight"></span
          ><span class="bar"></span>
          <label>Email</label>
        </div>
        <div class="group">
          <input type="number" v-model="weight" /><span class="highlight"></span
          ><span class="bar"></span>
          <label>Weight (kg)</label>
        </div>
        <div class="group">
          <input type="number" v-model="age" /><span class="highlight"></span
          ><span class="bar"></span>
          <label>Age</label>
        </div>
        <button class="button buttonBlue">
          SAVE PERSONAL DATA
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import navbar from '../components/navbar'

export default {
  name: 'ModifyPersonal',
  components: {
    navbar
  },
  data() {
    return {
      name: '',
      email: '',
      weight: null,
      age: null
    }
  },
  methods: {
    saveData() {
      console.log(this.name)
    }
  }
}
</script>
<style scoped>
* {
  font-family: 'Raleway', Sans-serif;
  font-weight: 900;
}
#header {
  justify-content: center;
  font-size: 20px;
  font-weight: 900;
  color: white;
  letter-spacing: 10px;
  background: linear-gradient(to right, #ff5f6d, #ffc371);
  box-shadow: 0px 1px 5px rgb(47, 79, 79);
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
