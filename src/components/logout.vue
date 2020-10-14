<script>
import { AuthRepository } from '../repositories'

export default {
  name: 'Logout',
  created() {
    AuthRepository.logout()
    delete localStorage.token
    this.$router.push('/')
  }
}
</script>
