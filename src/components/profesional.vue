<template>
  <div class="col-12 col-md-6 col-lg-4 ">
    <card class="card-blog">
      <h5><strong>Nombre: </strong>{{ Profesional.name }}</h5>
      <h5><strong>Apellido: </strong> {{ Profesional.lastName }}</h5>
      <h5><strong>Email: </strong> {{ Profesional.email }}</h5>
      <h5><strong>Especialidad: </strong> {{ Profesional.typeSpecialist }}</h5>
      <h5><strong>Descripcion: </strong> {{ Profesional.drescription }}</h5>
      <button type="button" class="btn btn-primary">Select</button>
    </card>
  </div>
</template>

<script>
export default {
  name: 'Profesional',
  props: {
    Profesional: Object
  }
};
</script>

<style scoped>
h5 {
  text-align: justify;
}
</style>
