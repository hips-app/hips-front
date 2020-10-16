<template>
  <div id="weekdays-container">
    <div :class="activeDay === 'MO' ? 'highlighted' : ''">MO</div>
    <div :class="activeDay === 'TU' ? 'highlighted' : ''">TU</div>
    <div :class="activeDay === 'WE' ? 'highlighted' : ''">WE</div>
    <div :class="activeDay === 'TH' ? 'highlighted' : ''">TH</div>
    <div :class="activeDay === 'FR' ? 'highlighted' : ''">FR</div>
    <div :class="activeDay === 'SA' ? 'highlighted' : ''">SA</div>
    <div :class="activeDay === 'SU' ? 'highlighted' : ''">SU</div>
  </div>
</template>

<script>
export default {
  props: {
    activeDay: {
      type: String,
      required: true
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
  background: linear-gradient(to top, #8e0e00, #1f1c18);
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
#weekdays-container div:hover {
  cursor: grab;
}
.highlighted {
  border-color: rgb(255, 215, 0) !important;
}
</style>
