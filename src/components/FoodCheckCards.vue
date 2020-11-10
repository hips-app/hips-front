<template>
  <base-card
    v-for="{ id, name, description, type, amount, checked } in foodsToShow"
    :key="id"
    class="col-sm-8 col-md-3"
  >
    <template #description>
      <p>{{ name }}</p>
      <p>{{ description }}</p>
    </template>
    <template #details>
      <p>Amount (g/ml): {{ amount }}</p>
      <p>{{ type }}</p>
    </template>
    <template #footer>
      <div
        v-if="!checked"
        class="check-btn btn-yellow"
        @click="addToCheckedFoods(id)"
      >
        MARK AS EATEN
      </div>
      <div v-else class="check-btn btn-red">
        MARKED AS EATEN
      </div>
    </template>
  </base-card>
</template>

<script>
import BaseCard from './BaseCard'
export default {
  components: {
    BaseCard
  },
  props: ['foodsToShow', 'currentDate', 'checkedFoods'],
  emits: ['add-checked-food'],
  data() {
    return {}
  },
  methods: {
    addToCheckedFoods(id) {
      this.$emit('add-checked-food', id)
    }
  }
}
</script>

<style scoped>
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
