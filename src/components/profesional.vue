<template>
  <div class="col-12 col-md-6 col-lg-4 m-3 p-2 custom-card">
    <card class="card-blog">
      <h4>
        <strong>{{ Profesional.name }} {{ Profesional.lastName }} </strong>
      </h4>
      <h5><strong>Email: </strong> {{ Profesional.email }}</h5>
      <h5><strong>Profession: </strong> {{ Profesional.typeSpecialist }}</h5>
      <h5><strong>Description: </strong> {{ Profesional.drescription }}</h5>
      <button
        type="button"
        class="btn btn-primary w-100"
        v-on:click="setSpecialist()"
      >
        Select
      </button>
    </card>
  </div>
</template>

<script>
import { UserService } from '../services';
export default {
  name: 'Profesional',
  props: {
    Profesional: Object
  },
  methods: {
    async setSpecialist() {
      try {
        await UserService.setSpecialist(this.Profesional.specialistAccountId);
        alert('Has cambiado de especialista');
      } catch (error) {
        alert('Has ocurrido un error');
      }
    }
  }
};
</script>

<style scoped>
h5 {
  text-align: justify;
}
.custom-card {
  border-style: solid;
  border-color: lightslategray;
  border-radius: 20px;
}
</style>
