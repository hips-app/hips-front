<template>
  <main class="container  ">
    <div class="popup">
      <div class="popup-content">
        <div class="form-group " style="">
          <h4>Ingrese su fecha de expiracion de la meta:</h4>
          <input
            v-model="preg1"
            type="date"
            date-format="dd/MM/yyyy"
            id="inputMetaDate"
            class="form-control"
            style=""
            placeholder="cm"
            required
          />
          <h4>Ingrese su meta:</h4>
          <input
            v-model="preg2"
            type="text"
            id="peso"
            class="form-control"
            style=""
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
</template>
<script>
import { AuthRepository } from '../repositories'
export default {
  name: 'metas',
  data() {
    return {
      preg1: '',
      preg2: ''
    }
  },
  methods: {
    async healthData() {
      if (
        await AuthRepository.regMeta(this.preg1, this.preg2, localStorage.token)
      ) {
        this.$router.push(this.$route.query.redirect || '/next')
      }
    }
  }
}
</script>
