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
              repsPerSeriesEx
            } in exerciseListToShow"
            :key="id"
            :id="id"
            :name="name"
            :desc="desc"
            :isSelectedEx="isSelectedEx"
            :numSeriesEx="numSeriesEx"
            :repsPerSeriesEx="repsPerSeriesEx"
            class="col-sm-8 col-md-3"
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
          ...this.categories.filter(cat => cat !== this.activeCategory)
        ];
        const idx = Math.floor(Math.random() * modifiedCategories.length);
        this.activeCategory = modifiedCategories[idx];
        this.updateExercisesToShow();
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
      exerciseList: [
        {
          id: 1,
          name: 'Pull Ups',
          desc:
            'Elbows flex and the shoulders adduct and extend to bring the elbows to the torso',
          category: 'strength'
        },
        {
          id: 2,
          name: 'Pull Ups',
          desc:
            'Elbows flex and the shoulders adduct and extend to bring the elbows to the torso',
          category: 'intensive'
        },
        {
          id: 3,
          name: 'Push Ups',
          desc:
            'By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids',
          category: 'strength'
        },
        {
          id: 4,
          name: 'Pistol Squats',
          desc:
            'Increase single leg strength, balance, and improve movement mechanics of the lower body',
          category: 'strength'
        },
        {
          id: 5,
          name: 'Pistol Squats',
          desc:
            'Increase single leg strength, balance, and improve movement mechanics of the lower body',
          category: 'strength'
        },
        {
          id: 6,
          name: 'Knee rotation',
          desc: 'Maintain flexibility',
          category: 'stretching'
        },
        {
          id: 7,
          name: 'Standing knee lift',
          desc: 'feel steadier on your feet and helps prevent falls',
          category: 'balance'
        },
        {
          id: 8,
          name: 'Outside Running',
          desc:
            'Get along with your body Get along with your body Get along with your body Get along with your body',
          category: 'cardio'
        },
        {
          id: 9,
          name: 'Outside Running2',
          desc: 'Get along with your body2',
          category: 'cardio'
        },
        {
          id: 10,
          name: 'Knee rotation',
          desc: 'Maintain flexibility',
          category: 'stretching'
        },
        {
          id: 11,
          name: 'Standing knee lift',
          desc: 'feel steadier on your feet and helps prevent falls',
          category: 'balance'
        },
        {
          id: 12,
          name: 'Outside Running',
          desc: 'Get along with your body',
          category: 'cardio'
        },
        {
          id: 13,
          name: 'Outside Running2',
          desc: 'Get along with your body2',
          category: 'cardio'
        },
        {
          id: 14,
          name: 'Knee rotation',
          desc:
            'Maintain flexibility Maintain flexibility Maintain flexibility',
          category: 'stretching'
        },
        {
          id: 15,
          name: 'Standing knee lift',
          desc: 'feel steadier on your feet and helps prevent falls',
          category: 'balance'
        },
        {
          id: 16,
          name: 'Outside Running',
          desc: 'Get along with your body',
          category: 'cardio'
        },
        {
          id: 17,
          name: 'Outside Running2',
          desc: 'Get along with your body2',
          category: 'cardio'
        }
      ],
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
      );

      this.exerciseListToShow = this.exerciseListToShow.map(ex => {
        const exerciseToDo = this.exercisesListToDo.find(
          exToDo => exToDo.id === ex.id && exToDo.day === this.activeDay
        );
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
      );

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
      const localS = JSON.parse(localStorage.getItem('exercisesListToDo'))[
        'data'
      ]

      const sanitizedObject = localS.filter(
        ex => ex.numSeries > 0 && ex.repsPerSeries > 0
      )

      console.log(sanitizedObject) // HERE THIS METHOD SHOULD MAKE A POST REQUEST TO DB
    }
  },

  // created() {
  //   this.exerciseList.forEach(exercise => {
  //     let cat = exercise.category
  //     if (!this.categories.includes(cat)) this.categories.push(cat)
  //   })

  //   let idx = Math.floor(Math.random() * this.categories.length)
  //   this.activeCategory = this.categories[idx]

  //   this.updateExercisesToShow()
  // },
  mounted() {
    if (localStorage.exercisesListToDo) {
      const retrievedList = localStorage.getItem('exercisesListToDo');
      this.exercisesListToDo = JSON.parse(retrievedList)['data'];
    }

    this.exerciseList.forEach(exercise => {
      const cat = exercise.category;
      if (!this.categories.includes(cat)) this.categories.push(cat);
    });

    const idx = Math.floor(Math.random() * this.categories.length);
    this.activeCategory = this.categories[idx];

    this.updateExercisesToShow();
  }
};
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
