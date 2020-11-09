<template>
  <div
    :class="isActive ? 'highlighted' : ''"
    @click="changeActiveCategory(catName)"
  >
    {{ this.catName.toUpperCase() }}
  </div>
</template>

<script>
export default {
  props: {
    catName: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    }
  },
  inject: ['changeActiveCategory']
};
</script>

<style scoped>
* {
  font-family: 'Raleway', Sans-serif;
  font-size: 15px;
  font-weight: 900;
  letter-spacing: 2px;
  color: white;
}
div {
  background-color: rgb(0, 206, 209);
  padding: 2px 10px;
  border-radius: 4px;
  height: 30px;
  line-height: 26px;
  text-align: center;
  margin: 10px 10px;
  cursor: grab;
}

.highlighted {
  background-color: rgb(255, 215, 0);
  color: black;
}
</style>
