<template>
  <navbar></navbar>
  <div id="header">MY STATISTICS: {{ 'EXERCISE' }}</div>
  <div class="stats-container">
    <h1 class="plan-details-title">PROGRESS BY DAY</h1>
    <div>
      <p class="plan__date">START DATE: {{ startDate }}</p>
      <p class="plan__date">
        END DATE:
        {{ endDate }}
      </p>
    </div>
    <progress-bar
      v-for="{ date, progress } in exerciseProgressList"
      :key="date"
      :date="date"
      :progress="progress"
    ></progress-bar>
  </div>
</template>

<script>
import moment from 'moment'

import navbar from '../components/navbar'
import ProgressBar from '../components/ProgressBar.vue'
// import ProgressBar from './../components/ProgressBar'

export default {
  components: {
    navbar,
    ProgressBar,
  },
  data() {
    return {
      exerciseProgressList: [
        { date: '2020-11-01', progress: 19 },
        { date: '2020-11-02', progress: 25 },
        { date: '2020-11-03', progress: 97 },
        { date: '2020-11-04', progress: 47 },
        { date: '2020-11-05', progress: 65 },
        { date: '2020-11-06', progress: 15 },
        { date: '2020-11-07', progress: 62 },
        { date: '2020-11-08', progress: 100 },
      ],
    }
  },
  computed: {
    startDate() {
      return this.exerciseProgressList[0]['date']
    },
    endDate() {
      return this.exerciseProgressList[this.exerciseProgressList.length - 1]['date']
    },
  },
  mounted() {
    console.log(moment('2020-11-01'))
  },
}
</script>

<style scoped>
* {
  font-family: 'Raleway', Sans-serif;
  font-weight: 900;
}

.stats-container {
  margin: 10vh 5vw;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 1px 1px 5px rgb(47, 79, 79);
}

#header {
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: white;
  letter-spacing: 10px;
  background: linear-gradient(to right, #ff5f6d, #ffc371);
  box-shadow: 0px 1px 5px rgb(47, 79, 79);
}
.plan-details-title {
  font-size: 2rem;
  padding: 0.7rem;
  margin-bottom: 2%;
  background-color: rgb(25, 25, 112);
  border-radius: inherit;
  color: white;
}

.plan__date {
  margin: 2px;
}
</style>
