<template>
  <div>
    <navbar></navbar>
  </div>
  <div class="main">
    <div id="header">LIST OF PROFESIONALS</div>
  </div>
  <div class="row">
    <Profesional
      v-for="specialist in specialistData"
      :key="specialist.specialistAccountId"
      :Profesional="specialist"
    ></Profesional>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import { UserSubscriptionService } from '../services'
import Profesional from '../components/profesional'
export default {
  name: 'profesionales',
  components: {
    navbar,
    Profesional,
  },
  data() {
    return {
      specialistData: [],
    }
  },
  mounted() {
    UserSubscriptionService.getProfesionals().then(response => {
      this.specialistData = response
    })
  },
  methods: {},
}
</script>

<style scoped>
#header {
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: white;
  letter-spacing: 10px;
  background: linear-gradient(to right, #ff5f6d, #ffc371);
  box-shadow: 0px 1px 5px rgb(47, 79, 79);
  margin-bottom: 10px;
}
</style>
