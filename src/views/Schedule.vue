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
              numSeriesEx,
              repsPerSeriesEx,
            } in exerciseListToShow"
            :key="id"
            :id="id"
            :name="name"
            :desc="desc"
            :isSelectedEx="isSelectedEx"
            :numSeriesEx="numSeriesEx"
            :repsPerSeriesEx="repsPerSeriesEx"
            class="col-sm-8 col-md-3 exercise-card"
          ></exercise-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ExerciseCard from '../components/ExerciseCard';
import ExerciseButtons from '../components/ExerciseButtons';
import navbar from '../components/navbar';
import WeekdaysBar from '../components/WeekdaysBar';
import { PhysicalExerciseService } from '../services';
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
    };
  },
  watch: {
    activeDay(newDay, oldDay) {
      if (newDay !== oldDay) {
        const modifiedCategories = [
          ...this.categories.filter(cat => cat !== this.activeCategory),
        ]
        const idx = Math.floor(Math.random() * modifiedCategories.length)
        this.activeCategory = modifiedCategories[idx]
        this.updateExercisesToShow()
      }
    },
    exercisesListToDo(newListToDo) {
      localStorage.setItem(
        'exercisesListToDo',
        JSON.stringify({ data: newListToDo })
      );
    }
  },
  data() {
    return {
      activeDay: 1,
      activeCategory: null,
      // Test Data
      exerciseList: [],
      categories: [],
      exerciseListToShow: [],
      exercisesListToDo: []
    };
  },
  methods: {
    changeActiveCategory(catName) {
      this.activeCategory = catName;
      this.updateExercisesToShow();
    },
    changeActiveDay(dayName) {
      this.activeDay = dayName;
      // this.updateExercisesToShow()
    },
    updateExercisesToShow() {
      this.exerciseListToShow = this.exerciseList.filter(
        exercise => exercise.category === this.activeCategory
      )

      this.exerciseListToShow = this.exerciseListToShow.map(ex => {
        const exerciseToDo = this.exercisesListToDo.find(
          exToDo => exToDo.id === ex.id && exToDo.day === this.activeDay
        )
        if (exerciseToDo) {
          return {
            ...ex,
            isSelectedEx: true,
            numSeriesEx: exerciseToDo.numSeries,
            repsPerSeriesEx: exerciseToDo.repsPerSeries
          };
        }
        return {
          ...ex,
          isSelectedEx: false,
          numSeriesEx: 0,
          repsPerSeriesEx: 0
        };
      });
      // console.log(this.exercisesListToDo)
    },
    updateExercisesToDo(id, numSeries, repsPerSeries, isSelected) {
      const exercise = this.exercisesListToDo.find(
        ex => ex.id === id && ex.day === this.activeDay
      )

      if (exercise) {
        if (!isSelected) {
          this.exercisesListToDo = this.exercisesListToDo.filter(
            ex => ex.id !== id
          );
        } else {
          exercise.numSeries = parseInt(numSeries);
          exercise.repsPerSeries = parseInt(repsPerSeries);
        }
      } else {
        if (isSelected) {
          this.exercisesListToDo.push({
            id,
            numSeries: parseInt(numSeries),
            repsPerSeries: parseInt(repsPerSeries),
            day: this.activeDay
          });
        }
      }
      this.exercisesListToDo = [...this.exercisesListToDo];
    },
    savePlanIntoDB() {
      // Needs to be refactored. Only for testing purposes
      const localS = JSON.parse(localStorage.getItem('exercisesListToDo'))['data']

      const sanitizedObject = localS.filter(
        ex => ex.numSeries > 0 && ex.repsPerSeries > 0
      )

      console.log(sanitizedObject) // HERE THIS METHOD SHOULD MAKE A POST REQUEST TO DB
    },
  },
  mounted() {
    PhysicalExerciseService.getAll().then(exercises => {
      this.exerciseList = exercises.map(exercise => {
        return {
          id: exercise.id,
          category: exercise.type.name,
          desc: exercise.description,
          name: exercise.name
        };
      });
      this.exerciseList.forEach(exercise => {
        const cat = exercise.category;
        if (!this.categories.includes(cat)) this.categories.push(cat);
      });
      const idx = Math.floor(Math.random() * this.categories.length);
      this.activeCategory = this.categories[idx];
      this.updateExercisesToShow();
    });
  }
};
</script>
<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: 'Ubuntu', Sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 2px;
  color: black;
}

.exercise-card {
  margin: 30px 15px 0px 15px;
  animation: scale 1s;
}

@keyframes scale {
  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}
</style>
