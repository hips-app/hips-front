<template>
  <div id="container">
    <navbar></navbar>
    <div id="header">MY STATISTICS: {{ 'EXERCISE' }}</div>
    <div id="stats-container">
      <h1 class="plan-details-title">PROGRESS PER DAY</h1>
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
        :dataProp="date"
        :progress="progress"
      ></progress-bar>
    </div>
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
        { date: '2020-11-07', progress: 30 },
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
  font-family: 'Ubuntu', Sans-serif;
  font-weight: 500;
}

#container {
  background-color: #eedd;
}

#stats-container {
  margin: 10vh 5vw;
  padding: 15px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 1px 1px 5px rgb(47, 79, 79);
  animation: appear 700ms ease-in;
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
  border-radius: inherit;
  color: white;
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.plan__date {
  margin: 2px;
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
