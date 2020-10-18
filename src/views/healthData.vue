<template>
  <div>
    <navbar></navbar>
  </div>
  <div class="hello">
    <h1>Datos de salud</h1>
  </div>
  <main class="container  ">
    <div class="popup">
      <div class="popup-content">
        <div class="form-group " style="">
          <h4>Ingrese su fecha de nacimiento:</h4>
          <input
            v-model="preg1"
            type="preg1"
            id="altura"
            class="form-control"
            style=""
            placeholder="cm"
            required
          />
          <h4>Ingrese su peso:</h4>
          <input
            v-model="preg2"
            type="preg2"
            id="peso"
            class="form-control"
            style=""
            placeholder="Kg"
            required
          />
          <h4>Ingrese su altura:</h4>
          <input
            v-model="preg3"
            type="preg3"
            id="altura"
            class="form-control"
            style=""
            placeholder="cm"
            required
          />
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
import { AuthRepository } from '../repositories'
export default {
  name: 'healthData',
  data() {
    return {
      preg1: '',
      preg2: '',
      preg3: ''
    }
  },
  components: {
    navbar,
    foot
  },
  methods: {
    async healthData() {
      if (
        (await AuthRepository.regDatosSalud(
          this.preg1,
          this.preg2,
          this.preg3
        )) == 200
      ) {
        this.$router.replace(this.$route.query.redirect || '/next')
      }
    }
  }
}
</script>
