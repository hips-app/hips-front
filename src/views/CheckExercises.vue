<template>
  <div>
    <navbar></navbar>
    <div id="container">
      <weekdays-bar :activeDay="activeDay" :isEditable="false"></weekdays-bar>
      <date-interval
        :start-date="startDate"
        :end-date="endDate"
        :current-date="currentDate"
        :active-day="activeDay"
        @go-to-next-week="goToNextWeek"
        @save-day="saveDay"
      ></date-interval>
      <div class="container-fluid">
        <div
          v-if="exercisesToShow.length !== 0"
          class="row align-items-start justify-content-center"
        >
          <exercise-check-cards
            :exercises-to-show="exercisesToShow"
            :current-date="currentDate"
            :checked-exercises="checkedExercises"
            @add-checked-exercise="addCheckedExercise"
          ></exercise-check-cards>
        </div>
        <div v-else class="no-exercises">
          <p>THERE ARE NO PLANNED EXERCISES FOR THIS DAY</p>
          <p><em class="fas fa-heart-broken"></em></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DateInterval from '../components/DateInterval'
import ExerciseCheckCards from '../components/ExerciseCheckCards'
import Navbar from '../components/navbar'
import WeekdaysBar from '../components/WeekdaysBar'

import moment from 'moment'

export default {
  components: {
    DateInterval,
    ExerciseCheckCards,
    Navbar,
    WeekdaysBar,
  },
  provide() {
    return {
      changeActiveDay: this.changeActiveDay,
    }
  },
  data() {
    return {
      activeDay: 1,
      startDate: moment('2020-11-01'),
      endDate: moment('2020-11-28'),
      currentDate: moment('2020-11-01'),
      exercisePlanList: [
        {
          id: 1000,
          exDescription: 'desc1',
          category: 'cat3',
          numSeries: 3,
          numRepetitions: 9,
          day: 1,
          checked: false,
        },
        {
          id: 2000,
          exDescription: 'desc2',
          category: 'cat1',
          numSeries: 4,
          numRepetitions: 11,
          day: 2,
          checked: false,
        },
        {
          id: 3000,
          exDescription: 'desc3',
          category: 'cat5',
          numSeries: 54,
          numRepetitions: 12,
          day: 2,
          checked: false,
        },
        {
          id: 4000,
          exDescription: 'desc1',
          category: 'cat3',
          numSeries: 3,
          numRepetitions: 9,
          day: 5,
          checked: false,
        },
        {
          id: 5000,
          exDescription: 'desc2',
          category: 'cat1',
          numSeries: 4,
          numRepetitions: 11,
          day: 2,
          checked: false,
        },
        {
          id: 6000,
          exDescription: 'desc3',
          category: 'cat5',
          numSeries: 54,
          numRepetitions: 12,
          day: 4,
          checked: false,
        },
        {
          id: 7000,
          exDescription: 'desc3',
          category: 'cat2',
          numSeries: 54,
          numRepetitions: 12,
          day: 7,
          checked: false,
        },
      ],
      checkedExercises: [],
    }
  },
  computed: {
    exercisesToShow() {
      return this.exercisePlanList.filter(ex => ex.day === this.activeDay)
    },
  },
  methods: {
    changeActiveDay(day) {
      this.activeDay = day
    },
    goToNextDay() {
      this.currentDate = this.currentDate.clone().add(1, 'days')
    },
    goToNextWeek() {
      this.currentDate = this.currentDate.clone().add(7 - this.activeDay + 1, 'days')
      this.activeDay = 1
    },
    addCheckedExercise(id) {
      this.checkedExercises.push(id)
      const plannedExercise = this.exercisePlanList.find(ex => ex.id === id)
      plannedExercise.checked = true
      console.log(this.checkedExercises)
    },
    saveDay() {
      let toSubmit = {}
      toSubmit.date = this.currentDate.format('DD/MM/YYYY')
      toSubmit.checked = [...this.checkedExercises]

      if (this.exercisesToShow.length === 0 || this.checkedExercises.length === 0)
        console.log('Nothing to save')
      else console.log(toSubmit) // HERE THIS METHOD SHOULD MAKE A POST REQUEST TO DB
      this.checkedExercises.splice(0, this.checkedExercises.length)

      const plannedExercise = this.exercisePlanList.find(ex => ex.checked)
      if (plannedExercise) plannedExercise.checked = false

      if (this.activeDay < 7) {
        this.activeDay += 1
        this.goToNextDay()
      } else this.goToNextWeek()
    },
  },
  mounted() {
    let dayNumber = this.startDate.day()
    if (dayNumber === 0) this.activeDay = 7
    else this.activeDay = this.startDate.day()
  },
}
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.no-exercises {
  font-family: 'Ubuntu', Sans-serif;
  margin-top: 10vh;
  font-size: 20px;
  font-weight: 900;
}

.fa-heart-broken {
  font-size: 50px;
  color: red;
}
</style>
