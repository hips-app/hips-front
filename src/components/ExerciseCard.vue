<template>
  <div id="card">
    <h5>{{ name.toUpperCase() }}</h5>
    <hr />
    <div id="desc-container">{{ desc }}</div>
    <div id="icons-container">
      <i class="fas fa-check-circle"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
#card {
  text-align: justify;
  padding: 12px;
  margin: 20px 15px;
  width: 18vw;
  height: 260px;
  border-radius: 4px;
  background-color: rgb(240, 248, 255);
  box-shadow: 1px 1px 5px rgb(47, 79, 79);
}

h5 {
  font-weight: 900;
}

#desc-container {
  height: 160px;
}

.fa-check-circle {
  font-size: 20px;
  float: right;
}
</style>
