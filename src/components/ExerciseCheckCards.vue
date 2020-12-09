<template>
  <base-card
    v-for="{
      id,
      exDescription,
      category,
      numSeries,
      numRepetitions,
      checked,
    } in exercisesToShow"
    :key="id"
    class="col-sm-8 col-md-3 base-card"
  >
    <template #description>
      <p>{{ exDescription }}</p>
    </template>
    <template #details>
      <p># Series: {{ numSeries }}</p>
      <p># Reps per Series: {{ numRepetitions }}</p>
      <p>{{ category }}</p>
    </template>
    <template #footer>
      <div
        v-if="!checked"
        class="check-btn btn-steelblue"
        @click="addToCheckedExercises(id)"
      >
        MARK AS DONE
      </div>
      <div v-else class="check-btn btn-red">
        MARKED AS DONE
      </div>
    </template>
  </base-card>
</template>

<script>
import BaseCard from './BaseCard'
export default {
  components: {
    BaseCard,
  },
  props: ['exercisesToShow', 'currentDate', 'checkedExercises'],
  emits: ['add-checked-exercise'],
  data() {
    return {}
  },
  methods: {
    addToCheckedExercises(id) {
      this.$emit('add-checked-exercise', id)
    },
  },
}
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: 'Ubuntu', Sans-serif;
}

p {
  margin: 0;
}

.check-btn {
  padding: 2px 10px;
  border-radius: 4px;
  height: 30px;
  line-height: 26px;
  margin-top: 10px;
  text-align: center;
}

.btn-steelblue {
  background-color: rgb(70, 130, 180);
  color: white;
  cursor: grab;
}

.btn-red {
  background-color: rgb(123, 104, 238);
  color: white;
  cursor: grab;
}

.base-card {
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
