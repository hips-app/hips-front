<template>
  <div id="user-statistics-card">
    <div if="$slots.userInfo">
      <slot name="userInfo"> </slot>
    </div>
    <div if="$slots.userStats">
      <slot name="userStats"> </slot>
    </div>
  </div>
</template>

<style scoped>
#user-statistics-card {
  border-radius: 4px;
  box-shadow: 1px 1px 5px rgb(47, 79, 79);
  margin: 20px;
  padding: 10px 10px 0 10px;
}
</style>
