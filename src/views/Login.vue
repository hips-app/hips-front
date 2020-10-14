<template>
  <div class="container">
    <div class="popup">
      <div class="popup-content">
        <p>Welcome!</p>
        <h2 class="popup-title">Sign in to <span id="hips">Hips</span></h2>
        <form>
          <div class="group">
            <input type="text" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Email</label>
          </div>

          <div class="group">
            <input type="password" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Password</label>
          </div>
        </form>
        <a href="#0" class="popup-button">Sign in</a>
        <router-link to="sign-up" id="btn-2" class="popup-button"
          >Sign up</router-link
        >
        <a href="#0" class="popup-button">Sign in with Google</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {}
}
</script>
