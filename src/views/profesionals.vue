<template>
  <div>
    <navbar></navbar>
  </div>
  <div class="main">
    <h1>Lista de profesionales</h1>
  </div>
  <div class="row">
    <Profesional
      v-for="specialist in specialistData"
      :key="specialist.specialistAccountId"
      :Profesional="specialist"
    ></Profesional>
  </div>
  <div>
    <foot></foot>
  </div>
</template>

<script>
import navbar from '../components/navbar';
import foot from '../components/foot';
import { UserSubscriptionService } from '../services';
import Profesional from '../components/profesional';
export default {
  name: 'profesionales',
  components: {
    navbar,
    foot,
    Profesional
  },
  data() {
    return {
      specialistData: []
    };
  },
  mounted() {
    UserSubscriptionService.getProfesionals().then(response => {
      this.specialistData = response;
    });
  },
  methods: {}
};
</script>
