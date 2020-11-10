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
          v-if="foodsToShow.length !== 0"
          class="row align-items-start justify-content-center"
        >
          <food-check-cards
            :foods-to-show="foodsToShow"
            :current-date="currentDate"
            :checked-foods="checkedFoods"
            @add-checked-food="addCheckedFood"
          ></food-check-cards>
        </div>
        <div v-else class="no-foods">
          <p>THERE ARE NO PLANNED FOODS FOR THIS DAY</p>
          <p><em class="fas fa-heart-broken"></em></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DateInterval from '../components/DateInterval'
import FoodCheckCards from '../components/FoodCheckCards'
import Navbar from '../components/navbar'
import WeekdaysBar from '../components/WeekdaysBar'

import moment from 'moment'

export default {
  components: {
    DateInterval,
    FoodCheckCards,
    Navbar,
    WeekdaysBar
  },
  provide() {
    return {
      changeActiveDay: this.changeActiveDay
    }
  },
  data() {
    return {
      activeDay: 1,
      startDate: moment('2020-11-01'),
      endDate: moment('2020-11-28'),
      currentDate: moment('2020-11-01'),
      foodPlanList: [
        {
          id: 1000,
          name: 'Pork',
          description: 'desc1',
          type: 'cat3',
          amount: 3,
          day: 1,
          checked: false
        },
        {
          id: 2000,
          name: 'Rice',
          description: 'desc2',
          type: 'cat1',
          amount: 4,
          day: 2,
          checked: false
        },
        {
          id: 3000,
          name: 'Beef',
          description: 'desc3',
          type: 'cat5',
          amount: 54,
          day: 2,
          checked: false
        },
        {
          id: 4000,
          name: 'Blueberry',
          description: 'desc1',
          type: 'cat3',
          amount: 3,
          day: 5,
          checked: false
        },
        {
          id: 5000,
          name: 'Apple',
          description: 'desc2',
          type: 'cat1',
          amount: 4,
          day: 2,
          checked: false
        },
        {
          id: 6000,
          name: 'Watermelon',
          description: 'desc3',
          type: 'cat5',
          amount: 54,
          day: 4,
          checked: false
        },
        {
          id: 7000,
          name: 'Apple',
          description: 'desc3',
          type: 'cat2',
          amount: 54,
          day: 7,
          checked: false
        }
      ],
      checkedFoods: []
    }
  },
  computed: {
    foodsToShow() {
      return this.foodPlanList.filter(food => food.day === this.activeDay)
    }
  },
  methods: {
    changeActiveDay(day) {
      this.activeDay = day
    },
    goToNextDay() {
      this.currentDate = this.currentDate.clone().add(1, 'days')
    },
    goToNextWeek() {
      this.currentDate = this.currentDate
        .clone()
        .add(7 - this.activeDay + 1, 'days')
      this.activeDay = 1
    },
    addCheckedFood(id) {
      this.checkedFoods.push(id)
      const plannedFood = this.foodPlanList.find(food => food.id === id)
      plannedFood.checked = true
      console.log(this.checkedFoods)
    },
    saveDay() {
      let toSubmit = {}
      toSubmit.date = this.currentDate.format('DD/MM/YYYY')
      toSubmit.checked = [...this.checkedFoods]

      if (this.foodsToShow.length === 0 || this.checkedFoods.length === 0)
        console.log('Nothing to save')
      else console.log(toSubmit) // HERE THIS METHOD SHOULD MAKE A POST REQUEST TO DB
      this.checkedFoods.splice(0, this.checkedFoods.length)

      const plannedFood = this.foodPlanList.find(ex => ex.checked)
      if (plannedFood) plannedFood.checked = false

      if (this.activeDay < 7) {
        this.activeDay += 1
        this.goToNextDay()
      } else this.goToNextWeek()
    }
  },
  mounted() {
    let dayNumber = this.startDate.day()
    if (dayNumber === 0) this.activeDay = 7
    else this.activeDay = this.startDate.day()
  }
}
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.no-foods {
  font-family: 'Raleway', Sans-serif;
  margin-top: 10vh;
  font-size: 20px;
  font-weight: 900;
}

.fa-heart-broken {
  font-size: 50px;
  color: red;
}
</style>
