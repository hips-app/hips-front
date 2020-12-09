<template>
  <div>
    <navbar></navbar>
    <div>
      <div id="header">SET A GOAL</div>
    </div>
    <main class="container  ">
      <img
        class="hips-svg"
        src="./../assets/undraw_finish_line_katerina_limpitsouni_xy20.svg"
        alt="img"
      />
      <div class="popup">
        <div class="popup-content">
          <div class="form-group ">
            <h4 class="text-light">Set your goal</h4>
            <input
              v-model="description"
              type="text"
              id="peso"
              class="form-control"
              required
            />
            <h4 class="text-light mt-4">
              Set your's goal due date
            </h4>
            <input
              v-model="expirationDate"
              type="date"
              id="inputMetaDate"
              class="form-control"
              placeholder="cm"
              required
            />
            <div style="text-align:center">
              <button href="#0" class="popup-button  mt-4" v-on:click="sendGoal()">
                enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import navbar from '../components/navbar'
import { UserService } from '../services'
export default {
  name: 'metas',
  data() {
    return {
      description: null,
      expirationDate: null,
    }
  },
  components: {
    navbar,
  },
  methods: {
    async sendGoal() {
      try {
        if (!(this.description && this.expirationDate)) {
          alert('Please fill all fields')
          return
        }
        await UserService.registerGoal(this.description, this.expirationDate)

        this.$router.replace('schedule')
      } catch (error) {
        alert('There was an error')
      }
    },
  },
}
</script>

<style scoped>
* {
  font-family: 'Ubuntu', sans-serif;
  color: black !important;
  font-size: 15px;
}

#header {
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: white !important;
  letter-spacing: 10px;
  background: linear-gradient(to right, #ff5f6d, #ffc371);
  box-shadow: 0px 1px 5px rgb(47, 79, 79);
  margin-bottom: 10px;
}
.popup-button {
  color: white !important;
}
</style>
