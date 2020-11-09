<template>
  <div class="col-12 col-md-6 col-lg-4 ">
    <card class="card-blog">
        <h5><b>Nombre: </b>{{ Profesional.name }}</h5>
        <h5><b>Apellido: </b> {{ Profesional.lastName }}</h5>
        <h5><b>Email: </b> {{ Profesional.email }}</h5>
        <h5><b>Especialidad: </b> {{ Profesional.typeSpecialist }}</h5>
        <h5><b>Descripcion: </b> {{ Profesional.drescription }}</h5>
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
