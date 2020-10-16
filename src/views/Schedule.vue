<template>
  <div>
    <navbar></navbar>
    <div id="container">
      <weekdays-bar :activeDay="activeDay"></weekdays-bar>
      <exercise-buttons
        :categories="categories"
        :activeCategory="activeCategory"
      ></exercise-buttons>
      <div class="container-fluid">
        <div class="row align-items-start justify-content-center">
          <exercise-card
            v-for="{ name, desc } in exerciseListToShow"
            :key="name"
            :name="name"
            :desc="desc"
            class="col-sm-8 col-md-3"
          ></exercise-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ExerciseCard from '../components/ExerciseCard'
import ExerciseButtons from '../components/ExerciseButtons'
import navbar from '../components/navbar'
import WeekdaysBar from '../components/WeekdaysBar'

export default {
  name: 'Schedule',
  components: {
    ExerciseButtons,
    ExerciseCard,
    navbar,
    WeekdaysBar
  },
  provide() {
    return {
      changeActiveCategory: this.changeActiveCategory
    }
  },
  data() {
    return {
      activeDay: 'MO',
      activeCategory: null,
      // Test Data
      exerciseList: [
        {
          name: 'Pull Ups',
          desc:
            'Elbows flex and the shoulders adduct and extend to bring the elbows to the torso',
          category: 'strength'
        },
        {
          name: 'Pull Ups',
          desc:
            'Elbows flex and the shoulders adduct and extend to bring the elbows to the torso',
          category: 'intensive'
        },
        {
          name: 'Push Ups',
          desc:
            'By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids',
          category: 'strength'
        },
        {
          name: 'Pistol Squats',
          desc:
            'Increase single leg strength, balance, and improve movement mechanics of the lower body',
          category: 'strength'
        },
        {
          name: 'Pistol Squats',
          desc:
            'Increase single leg strength, balance, and improve movement mechanics of the lower body',
          category: 'strength'
        },
        {
          name: 'Knee rotation',
          desc: 'Maintain flexibility',
          category: 'stretching'
        },
        {
          name: 'Standing knee lift',
          desc: 'feel steadier on your feet and helps prevent falls',
          category: 'balance'
        },
        {
          name: 'Outside Running',
          desc:
            'Get along with your body Get along with your body Get along with your body Get along with your body',
          category: 'cardio'
        },
        {
          name: 'Outside Running2',
          desc: 'Get along with your body2',
          category: 'cardio'
        },
        {
          name: 'Knee rotation',
          desc: 'Maintain flexibility',
          category: 'stretching'
        },
        {
          name: 'Standing knee lift',
          desc: 'feel steadier on your feet and helps prevent falls',
          category: 'balance'
        },
        {
          name: 'Outside Running',
          desc: 'Get along with your body',
          category: 'cardio'
        },
        {
          name: 'Outside Running2',
          desc: 'Get along with your body2',
          category: 'cardio'
        },
        {
          name: 'Knee rotation',
          desc:
            'Maintain flexibility Maintain flexibility Maintain flexibility',
          category: 'stretching'
        },
        {
          name: 'Standing knee lift',
          desc: 'feel steadier on your feet and helps prevent falls',
          category: 'balance'
        },
        {
          name: 'Outside Running',
          desc: 'Get along with your body',
          category: 'cardio'
        },
        {
          name: 'Outside Running2',
          desc: 'Get along with your body2',
          category: 'cardio'
        }
      ],
      categories: [],
      exerciseListToShow: []
    }
  },
  methods: {
    changeActiveCategory(catName) {
      this.activeCategory = catName
      this.updateExercisesToShow()
    },

    updateExercisesToShow() {
      this.exerciseListToShow = this.exerciseList.filter(
        exercise => exercise.category === this.activeCategory
      )
    }
  },
  created() {
    this.exerciseList.forEach(exercise => {
      let cat = exercise.category
      if (!this.categories.includes(cat)) this.categories.push(cat)
    })

    let idx = Math.floor(Math.random() * this.categories.length)
    this.activeCategory = this.categories[idx]

    this.updateExercisesToShow()
  }
}
</script>
<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: 'Raleway', Sans-serif;
  font-size: 15px;
  font-weight: 900;
  letter-spacing: 2px;
  color: black;
}
.container-fluid {
  height: 100vh;
}

.col-md-3 {
  margin: 30px 15px 0px 15px;
}
</style>
