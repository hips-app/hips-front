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
#weekdays-container div:hover {
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
    color: white;
    border-radius: 0;
  }
}
</style>
