<template>
  <div id="buttons-container">
    <excercise-button
      v-for="catName in categories"
      :key="catName"
      :cat-name="catName"
      :isActive="catName === activeCategory"
    >
      {{ catName }}
    </excercise-button>
  </div>
</template>

<script>
import ExcerciseButton from '../components/ExerciseButton'

export default {
  components: {
    ExcerciseButton
  },
  props: ['categories', 'activeCategory']
}
</script>

<style scoped>
#buttons-container {
  display: inline-block;
  display: flex;
  padding: 10px 0;
  justify-content: center;
  width: 100%;
  background-color: rgb(240, 248, 255);
  box-shadow: 1px 1px 5px rgb(47, 79, 79);
}

/* #buttons-container div {
  background-color: rgb(25, 25, 112);
  padding: 2px 10px;
  border-radius: 4px;
  height: 30px;
  line-height: 26px;
  text-align: center;
  margin: 0 10px;
  cursor: grab;
} */
</style>
