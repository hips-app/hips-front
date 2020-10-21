<template>
  <main class="container  ">
    <div class="popup">
      <div class="popup-content">
        <div class="form-group " style="">
          <h4 class="text-light">Ingrese su meta:</h4>
          <input
            v-model="description"
            type="text"
            id="peso"
            class="form-control"
            style=""
            required
          />
          <h4 class="text-light mt-4">
            Ingrese su fecha de expiracion de la meta:
          </h4>
          <input
            v-model="expirationDate"
            type="date"
            id="inputMetaDate"
            class="form-control"
            placeholder="cm"
            required
          />
          <center>
            <button
              href="#0"
              class="popup-button  mt-4"
              v-on:click="sendGoal()"
            >
              enviar
            </button>
          </center>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { UserService } from '../services';
export default {
  name: 'metas',
  data() {
    return {
      description: null,
      expirationDate: null
    };
  },
  methods: {
    async sendGoal() {
      try {
        if (!(this.description && this.expirationDate)) {
          alert('Please fill all fields');
          return;
        }
        await UserService.registerGoal(this.description, this.expirationDate);

        this.$router.replace('schedule');
      } catch (error) {
        alert('There was an error');
      }
    }
  }
};
</script>
