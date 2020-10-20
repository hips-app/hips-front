<template>
  <nav class="navbar navbar-dark">
    <a class="navbar-brand" href="/">HIPS APP</a>
    <span class="navbar-text">
      <div class="popup">
        <div class="popup-content">
          <p id="user"></p>
          <button href="#0" class="popup-button">
            <router-link to="/logout">
              Logout
            </router-link>
          </button>
        </div>
      </div>
    </span>
  </nav>
</template>

<script>
// eslint-disable-next-line no-undef

export default {
  name: 'Navbar',
  getuser() {
    var user = localStorage.getItem('User')
    document.getElementById('user').innerHTML = user
  }
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
