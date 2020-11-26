<template>
  <div>
    <navbar></navbar>
    <div id="header">MY USERS PROGRESS</div>
    <div class="row align-items-start justify-content-center">
      <user-statistics-card
        v-for="{ id, name, exerciseProgress, foodProgress } in userProgressList"
        :key="id"
        class="col-sm-8 col-md-4"
      >
        <template #userInfo>
          <h1 class="plan-details-title">{{ name }}</h1>
        </template>
        <template #userStats>
          <progress-bar
            :data-prop="'EXERCISE PROGRESS'"
            :progress="exerciseProgress"
          >
          </progress-bar>
          <progress-bar :data-prop="'FOOD PROGRESS'" :progress="foodProgress">
          </progress-bar>
        </template>
      </user-statistics-card>
    </div>
  </div>
</template>

<script>
import ProgressBar from './../components/ProgressBar';
import navbar from '../components/navbar';
import UserStatisticsCard from './../components/UserStatisticsCard';
export default {
  name: 'UserProgress',
  components: {
    navbar,
    ProgressBar,
    UserStatisticsCard
  },
  data() {
    return {
      userProgressList: [
        {
          id: 1,
          name: 'Laura Natalia',
          exerciseProgress: 78,
          foodProgress: 100
        },
        {
          id: 2,
          name: 'Daniel Solano',
          exerciseProgress: 88,
          foodProgress: 80
        },
        {
          id: 3,
          name: 'Sebastián Nieto',
          exerciseProgress: 100,
          foodProgress: 85
        },
        { id: 4, name: 'Jhonatan', exerciseProgress: 70, foodProgress: 98 }
      ]
    };
  }
};
</script>
<style scoped>
* {
  font-family: 'Raleway', Sans-serif;
  font-weight: 900;
}

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

.plan-details-title {
  font-size: 1rem;
  padding: 0.7rem;
  border-radius: 4px;
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
</style>
