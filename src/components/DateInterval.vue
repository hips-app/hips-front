<template>
  <div class="date-interval-container">
    <div>
      START DATE:
      {{
        startDate
          .toString()
          .slice(0, 10)
          .toUpperCase()
      }}
    </div>
    <div class="right-date">
      END DATE:
      {{
        endDate
          .toString()
          .slice(0, 10)
          .toUpperCase()
      }}
    </div>
    <div class="right-date">
      CURRENT DATE:
      {{
        currentDate
          .toString()
          .slice(0, 10)
          .toUpperCase()
      }}
    </div>
    <div v-if="!areExercisesToCheck" class="right-date btn-next" @click="saveDay">
      SAVE DAY
    </div>
    <div
      v-if="!(nextWeekIsOutOfRange || areExercisesToCheck)"
      class="right-date btn-next"
      @click="addWeek"
    >
      NEXT WEEK
    </div>
  </div>
</template>

<script>
// import moment from 'moment'

export default {
  props: ['startDate', 'endDate', 'currentDate', 'activeDay'],
  emits: ['go-to-next-week', 'save-day'],
  computed: {
    areExercisesToCheck() {
      return this.endDate.format('DD/MM/YYYY') === this.currentDate.format('DD/MM/YYYY')
    },
    nextWeekIsOutOfRange() {
      return (
        this.endDate.clone() <
        this.currentDate.clone().add(7 - this.activeDay + 1, 'days')
      )
    },
  },
  methods: {
    addWeek() {
      this.$emit('go-to-next-week')
    },
    saveDay() {
      this.$emit('save-day')
    },
  },
}
</script>

<style scoped>
* {
  font-family: 'Ubuntu', Sans-serif;
  font-size: 14px;
  font-weight: 900;
}
.right-date {
  margin-left: 20px;
}
.date-interval-container {
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 5px rgb(47, 79, 79);
}
.btn-next {
  padding: 0 4px 0 4px;
  color: white;
  background: rgb(0, 0, 128);
  user-select: none;
  cursor: grab;
}
</style>
