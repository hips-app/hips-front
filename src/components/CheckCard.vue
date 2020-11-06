<template>
  <div class="exercise-card">
    <div>
      <slot name="description"> </slot>
    </div>
    <div>
      <slot name="details"> </slot>
    </div>
    <div><slot name="footer"> </slot></div>
  </div>
</template>

<style scoped>
.exercise-card {
  font-family: 'Raleway', Sans-serif;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 1px;
  color: white;
  text-align: justify;
  padding: 12px;
  line-height: 20%;
  border-radius: 4px;
  background: #f2994a;
  background: -webkit-linear-gradient(to bottom, #f2c94c, #f2994a);
  background: linear-gradient(to bottom, #f2c94c, #f2994a);
}
</style>
