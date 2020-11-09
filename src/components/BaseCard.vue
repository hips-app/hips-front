<template>
  <div class="exercise-card">
    <div v-if="$slots.description">
      <slot name="description"> </slot>
    </div>
    <div v-if="$slots.details">
      <slot name="details"> </slot>
    </div>
    <div v-if="$slots.footer"><slot name="footer"> </slot></div>
  </div>
</template>

<style scoped>
.exercise-card {
  font-family: 'Raleway', Sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: white;
  text-align: justify;
  padding: 12px;
  border-radius: 4px;
  box-shadow: 1px 1px 5px rgb(47, 79, 79);
  background: #f2994a;
  background: -webkit-linear-gradient(bottom, #f2c94c, #f2994a);
  background: linear-gradient(bottom, #f2c94c, #f2994a);
}
</style>
