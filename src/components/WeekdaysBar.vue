<template>
  <div id="weekdays-container">
    <div
      v-for="day in 7"
      @click="changeActiveDayIfEditable(day)"
      :key="day"
      :class="{ isEditable, highlighted: activeDay === day }"
    >
      {{ dayNames[day] }}
    </div>
  </div>
</template>

<script>
export default {
  inject: ['changeActiveDay'],
  props: {
    isEditable: {
      type: Boolean,
      required: true
    },
    activeDay: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      dayNames: {
        1: 'MO',
        2: 'TU',
        3: 'WE',
        4: 'TH',
        5: 'FR',
        6: 'SA',
        7: 'SU'
      }
    }
  },
  methods: {
    changeActiveDayIfEditable(day) {
      if (this.isEditable) this.changeActiveDay(day)
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Raleway', Sans-serif;
  font-size: 20px;
  font-weight: 900;
}

#weekdays-container {
  display: inline-block;
  display: flex;
  justify-content: center;
  width: 100%;
  background: linear-gradient(to right, #ff5f6d, #ffc371);
}

#weekdays-container div {
  width: 80px;
  height: 80px;
  margin: 10px;
  line-height: 60px;
  letter-spacing: 1px;
  border: 10px solid white;
  color: white;
  border-radius: 50%;
}
.isEditable:hover {
  cursor: grab;
}
.highlighted {
  border-color: rgb(0, 255, 127) !important;
}

@media only screen and (max-width: 720px) {
  #weekdays-container div {
    width: 40px;
    height: 40px;
    margin: 10px;
    line-height: 40px;
    display: block;
    letter-spacing: 1px;
    border: none;
    border-radius: 0;
  }

  .highlighted {
    color: rgb(0, 255, 127) !important;
  }
}
</style>
