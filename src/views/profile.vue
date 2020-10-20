<template>
  <div>
    <navbar></navbar>
  </div>
  <div class="hello">
    <h1>Perfil de usuario</h1>
  </div>
  <main class="container  ">
    <div class="popup">
      <div class="popup-content">
        <div class="form-group " style="">
          <center>
            <span class="text-white pr-2 pt-2 pl-5">{{ preg1 }}</span>
          </center>
          <center>
            <button
              href="#0"
              class="popup-button"
              v-on:click="printsomething()"
            >
              METODO
            </button>
          </center>
          <h4>Ingrese su peso:</h4>
          <input
            v-model="preg2"
            type="text"
            id="peso"
            class="form-control"
            style=""
            placeholder="Kg"
            required
          />
          <h4>Ingrese su altura:</h4>
          <input
            v-model="preg3"
            type="text"
            id="altura"
            class="form-control"
            style=""
            placeholder="cm"
            required
          />
          <center>
            <button href="#0" class="popup-button" type="submit">
              enviar
            </button>
          </center>
        </div>
      </div>
    </div>
  </main>
  <div>
    <foot></foot>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import foot from '../components/foot'
//import { AuthRepository } from '../repositories'

export default {
  name: 'profile',
  data() {
    return {
      preg1: 'lso',
      preg2: '',
      preg3: ''
    }
  },
  components: {
    navbar,
    foot
  },
  methods: {
    printsomething: function() {
      this.preg1 = 'casa'
    } /*,
    async healthData() {
      if (
        await AuthRepository.regDatosSalud(this.preg1, this.preg2, this.preg3)
      ) {
        this.$router.replace(this.$route.query.redirect || '/next')
      }
    }*/
  }
}
</script>
