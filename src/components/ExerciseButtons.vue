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
    <div @click="savePlanIntoDB" class="btn-save">SAVE</div>
  </div>
</template>

<script>
import ExcerciseButton from '../components/ExerciseButton'

export default {
  components: {
    ExcerciseButton,
  },
  inject: ['savePlanIntoDB'],
  props: ['categories', 'activeCategory'],
}
</script>

<style scoped>
#buttons-container {
  display: flex;
  /* padding: 10px 0; */
  justify-content: center;
  background-color: rgb(240, 248, 255);
  box-shadow: 1px 1px 5px rgb(47, 79, 79);
}

* {
  font-family: 'Ubuntu', Sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 2px;
  color: white;
}
.btn-save {
  background-color: rgb(205, 92, 92);
  padding: 2px 10px;
  border-radius: 4px;
  height: 30px;
  line-height: 26px;
  text-align: center;
  margin: 10px 10px 10px 80px;
  cursor: grab;
}

@media only screen and (max-width: 720px) {
  #buttons-container {
    display: block;
    box-shadow: none;
    background-color: none;
  }
}

@media only screen and (max-width: 880px) {
  .btn-save {
    margin: 10px 10px;
  }
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
