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
            <h1 class="text-white pr-2 pt-2 pl-5">Nombre: {{ nombre }}</h1>
            <h1 class="text-white pr-2 pt-2 pl-5">Nombre: {{ nombre }}</h1>
            <h1 class="text-white pr-2 pt-2 pl-5">Nombre: {{ nombre }}</h1>
            <h1 class="text-white pr-2 pt-2 pl-5">Nombre: {{ nombre }}</h1>
          </center>
          <center>
            <button
              href="#0"
              class="popup-button"
              v-on:click="printsomething()"
            >
              metodo insbv
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
import { AuthRepository } from '../repositories'

export default {
  name: 'profile',
  data() {
    return {
      nombre: 'ioso',
      preg2: '',
      preg3: ''
    }
  },
  async created() {
    var data = await AuthRepository.profile()
    this.setProfile(data)
  },
  components: {
    navbar,
    foot
  },
  methods: {
    setProfile(data) {
      this.nombre = data.data.name
    }
  }
}
</script>
