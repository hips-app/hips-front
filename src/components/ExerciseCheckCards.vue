<template>
  <check-card
    v-for="{
      id,
      exDescription,
      category,
      numSeries,
      numRepetitions,
      checked
    } in exercisesToShow"
    :key="id"
    class="col-sm-8 col-md-3"
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
        class="check-btn btn-yellow"
        @click="addToCheckedExercises(id)"
      >
        MARK AS DONE
      </div>
      <div v-else class="check-btn btn-red">
        MARKED AS DONE
      </div>
    </template>
  </check-card>
</template>

<script>
import CheckCard from './CheckCard'
export default {
  components: {
    CheckCard
  },
  props: ['exercisesToShow', 'currentDate', 'checkedExercises'],
  emits: ['add-checked-exercise'],
  data() {
    return {}
  },
  methods: {
    addToCheckedExercises(id) {
      this.$emit('add-checked-exercise', id)
    }
  }
}
</script>

<style scoped>
.check-btn {
  padding: 2px 10px;
  border-radius: 4px;
  height: 30px;
  line-height: 26px;
  text-align: center;
}

.btn-yellow {
  background-color: rgb(255, 215, 0);
  color: black;
  cursor: grab;
}

.btn-red {
  background-color: rgb(139, 0, 0);
  user-select: none;
  color: white;
}

.col-md-3 {
  margin: 30px 15px 0px 15px;
}
</style>
