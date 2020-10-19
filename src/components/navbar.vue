<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a class="navbar-brand" href="/">HIPS APP</a>
    <span class="navbar-text" style="position:relative; left:540px;">
      <div class="popup">
        <div class="popup-content">
          <p id="user">USER</p>
          <button href="#0" class="popup-button">
            <router-link to="/logout">
              Logout
            </router-link>
          </button>
        </div>
      </div>
    </span>
    <registroMeta style="position:relative; left:-200px;"></registroMeta>
  </nav>
</template>

<script>
// eslint-disable-next-line no-undef
import registroMeta from './registroMeta'
export default {
  name: 'Navbar',
  components: {
    registroMeta
  }
}
</script>
