<script>
import { AuthService } from '../repositories';

export default {
  name: 'Logout',
  created() {
    if (AuthService.logout(localStorage.token)) {
      delete localStorage.token;
      this.$router.replace(this.$route.query.redirect || '/');
    } else {
      console.log('database logout failed');
      delete localStorage.token;
      this.$router.replace(this.$route.query.redirect || '/');
    }
  }
};
</script>
