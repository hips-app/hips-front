<template>
  <div id="main-container">
    <img class="hips-svg" src="./../assets/undraw_page_not_found_su7k.svg" alt="img" />
  </div>
</template>

<style scoped>
#main-container {
  position: relative;
  width: 100vw;
}

.hips-svg {
  position: absolute;
  top: 20vh;
  left: 25vw;
  transform: scale(0.8);
}

@media only screen and (max-width: 800px) {
  .hips-svg {
    top: -10vh;
    left: -50vw;
    transform: scale(0.2);
  }
}
</style>
