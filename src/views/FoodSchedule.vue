<template>
  <div>
    <navbar></navbar>
    <div id="container">
      <weekdays-bar :activeDay="activeDay" :isEditable="true"></weekdays-bar>
      <exercise-buttons
        :categories="categories"
        :activeCategory="activeCategory"
      ></exercise-buttons>
      <div class="container-fluid">
        <div class="row align-items-start justify-content-center">
          <exercise-card
            v-for="{
              id,
              name,
              desc,
              isSelectedEx,
              amountEx
            } in exerciseListToShow"
            :key="id"
            :id="id"
            :name="name"
            :desc="desc"
            :isSelectedEx="isSelectedEx"
            :amountEx="amountEx"
            class="col-sm-8 col-md-3"
          ></exercise-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ExerciseCard from '../components/FoodCard'
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
      changeActiveCategory: this.changeActiveCategory,
      changeActiveDay: this.changeActiveDay,
      savePlanIntoDB: this.savePlanIntoDB,
      updateExercisesToDo: this.updateExercisesToDo
    }
  },
  watch: {
    activeDay(newDay, oldDay) {
      if (newDay !== oldDay) {
        const modifiedCategories = [
          ...this.categories.filter(cat => cat !== this.activeCategory)
        ]
        const idx = Math.floor(Math.random() * modifiedCategories.length)
        this.activeCategory = modifiedCategories[idx]
        this.updateExercisesToShow()
      }
    },
    foodListToEat(newListToDo) {
      localStorage.setItem(
        'foodListToEat',
        JSON.stringify({ data: newListToDo })
      )
    }
  },
  data() {
    return {
      activeDay: 1,
      activeCategory: null,
      // Test Data
      exerciseList: [
        {
          id: 1,
          name: 'rice',
          desc:
            'Elbows flex and the shoulders adduct and extend to bring the elbows to the torso',
          type: 'carbohydrate'
        },
        {
          id: 2,
          name: 'watermelon',
          desc:
            'Elbows flex and the shoulders adduct and extend to bring the elbows to the torso',
          type: 'fruits'
        },
        {
          id: 3,
          name: 'potato',
          desc:
            'By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids',
          type: 'carbohydrate'
        },
        {
          id: 4,
          name: 'potato2',
          desc:
            'Increase single leg carbohydrate, diary, and improve movement mechanics of the lower body',
          type: 'carbohydrate'
        },
        {
          id: 5,
          name: 'rice3',
          desc:
            'Increase single leg carbohydrate, diary, and improve movement mechanics of the lower body',
          type: 'carbohydrate'
        },
        {
          id: 6,
          name: 'spaghetti',
          desc: 'Maintain flexibility',
          type: 'protein'
        },
        {
          id: 7,
          name: 'cheese',
          desc: 'feel steadier on your feet and helps prevent falls',
          type: 'diary'
        },
        {
          id: 8,
          name: 'onion',
          desc:
            'Get along with your body Get along with your body Get along with your body Get along with your body',
          type: 'vegetables'
        },
        {
          id: 9,
          name: 'tomatoe',
          desc: 'Get along with your body2',
          type: 'vegetables'
        },
        {
          id: 10,
          name: 'Beef',
          desc: 'Maintain flexibility',
          type: 'protein'
        },
        {
          id: 11,
          name: 'Milk',
          desc: 'feel steadier on your feet and helps prevent falls',
          type: 'diary'
        },
        {
          id: 12,
          name: 'pumpkin',
          desc: 'Get along with your body',
          type: 'vegetables'
        },
        {
          id: 13,
          name: 'carrot',
          desc: 'Get along with your body2',
          type: 'vegetables'
        },
        {
          id: 14,
          name: 'pork',
          desc:
            'Maintain flexibility Maintain flexibility Maintain flexibility',
          type: 'protein'
        },
        {
          id: 15,
          name: 'milk2',
          desc: 'feel steadier on your feet and helps prevent falls',
          type: 'diary'
        },
        {
          id: 16,
          name: 'carrot2',
          desc: 'Get along with your body',
          type: 'vegetables'
        },
        {
          id: 17,
          name: 'carrot3',
          desc: 'Get along with your body2',
          type: 'vegetables'
        }
      ],
      categories: [],
      exerciseListToShow: [],
      foodListToEat: []
    }
  },
  methods: {
    changeActiveCategory(catName) {
      this.activeCategory = catName
      this.updateExercisesToShow()
    },
    changeActiveDay(dayName) {
      this.activeDay = dayName
      // this.updateExercisesToShow()
    },
    updateExercisesToShow() {
      this.exerciseListToShow = this.exerciseList.filter(
        exercise => exercise.type === this.activeCategory
      )

      this.exerciseListToShow = this.exerciseListToShow.map(ex => {
        const exerciseToDo = this.foodListToEat.find(
          exToDo => exToDo.id === ex.id && exToDo.day === this.activeDay
        )
        if (exerciseToDo) {
          return {
            ...ex,
            isSelectedEx: true,
            amountEx: exerciseToDo.amount
          }
        }
        return {
          ...ex,
          isSelectedEx: false,
          amountEx: 0
        }
      })
      // console.log(this.foodListToEat)
    },
    updateExercisesToDo(id, amount, isSelected) {
      const exercise = this.foodListToEat.find(
        ex => ex.id === id && ex.day === this.activeDay
      )

      if (exercise) {
        if (!isSelected) {
          this.foodListToEat = this.foodListToEat.filter(ex => ex.id !== id)
        } else {
          exercise.amount = parseInt(amount)
        }
      } else {
        if (isSelected) {
          this.foodListToEat.push({
            id,
            amount: parseInt(amount),
            day: this.activeDay
          })
        }
      }
      this.foodListToEat = [...this.foodListToEat]
    },
    savePlanIntoDB() {
      // Needs to be refactored. Only for testing purposes
      const localS = JSON.parse(localStorage.getItem('foodListToEat'))['data']

      const sanitizedObject = localS.filter(food => food.amount > 0)

      console.log(sanitizedObject)
    }
  },

  // created() {
  //   this.exerciseList.forEach(exercise => {
  //     let cat = exercise.type
  //     if (!this.categories.includes(cat)) this.categories.push(cat)
  //   })

  //   let idx = Math.floor(Math.random() * this.categories.length)
  //   this.activeCategory = this.categories[idx]

  //   this.updateExercisesToShow()
  // },
  mounted() {
    if (localStorage.foodListToEat) {
      const retrievedList = localStorage.getItem('foodListToEat')
      this.foodListToEat = JSON.parse(retrievedList)['data']
    }

    this.exerciseList.forEach(exercise => {
      const cat = exercise.type
      if (!this.categories.includes(cat)) this.categories.push(cat)
    })

    const idx = Math.floor(Math.random() * this.categories.length)
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
.col-md-3 {
  margin: 30px 15px 0px 15px;
}
</style>
