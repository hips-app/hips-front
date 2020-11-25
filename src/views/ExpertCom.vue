<template>
  <div>
    <div><navbar></navbar></div>
    <div>QUE LE QUIERES DECIR AL EXPERTO</div>
    <table class="table" style="">
      <thead>
        <tr>
          <th class="">
            <section>
              <img
                class="profile-picture"
                :src="profilePicture"
                alt=""
                width="200"
                height="200"
              />
            </section>
          </th>
          <th>
            <img
              class="img-fluid "
              src="https://st2.depositphotos.com/1007566/12064/v/950/depositphotos_120646474-stock-illustration-speech-bubble-message-isolated-icon.jpg"
              alt=""
              width="200"
              height="200"
            />
            <input
              v-model="message"
              class="form-control "
              rows="5"
              type="text"
              id="message"
              style=""
            />
            <button
              href="#0"
              class="btn btn-primary  mt-4"
              v-on:click="enviarMessage()"
            >
              enviar
            </button>
          </th>
        </tr>
      </thead>
    </table>
    <div>
      <foot></foot>
    </div>
  </div>
</template>
<script>
import navbar from '../components/navbar';
import foot from '../components/foot';
import { UserService } from '../services';
import { AuthController } from '../controllers';
export default {
  data() {
    return {
      profilePicture: null,
      message: ''
    };
  },
  mounted() {
    UserService.getProfile(AuthController.currentAccount.id)
      .then(profileData => {
        this.profilePicture =
          profileData.profilePicture == null || profileData.profilePicture == ''
            ? 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'
            : profileData.profilePicture;
      })
      .catch(() => {
        alert('there was an error fetching user data');
      });
  },
  components: {
    navbar,
    foot
  },
  methods: {
    async enviarMessage() {
      try {
        if (!this.message) {
          alert('Cual mensaje quieres enviar');
          return;
        }
        await UserService.enviarMensaje(
          this.message,
          AuthController.currentAccount.id
        );
        this.$emit('finish-task');
        alert('mensaje enviado');
        this.message = '';
      } catch (error) {
        alert('There was an error');
      }
    }
  }
};
</script>
