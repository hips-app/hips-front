<script>
import { AuthRepository } from '../repositories'

export default {
  name: 'Logout',
  created() {
    if (AuthRepository.logout(localStorage.token)) {
      delete localStorage.token
      this.$router.replace(this.$route.query.redirect || '/')
    } else {
      console.log('database logout failed')
      delete localStorage.token
      this.$router.replace(this.$route.query.redirect || '/')
    }
  }
}
</script>
