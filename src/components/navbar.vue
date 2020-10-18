<template>
  <nav class="navbar navbar-dark">
    <a class="navbar-brand" href="/">HIPS APP</a>

    <span class="navbar-text">
      {{ 'User' }}
      <router-link to="/logout" class="btn btn-logout btn-sm">
        Logout
      </router-link>
    </span>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  User: localStorage.user
}
</script>

<style lang="scss" scoped>
.btn-logout {
  background-color: #837a75;
  border-color: #837a75;
  color: #fff;
}

.btn-logout:hover {
  background-color: #31302f;
  border-color: #31302f;
  color: #fff;
}
</style>
