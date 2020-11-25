<template>
  <div class="mt-5">
    <!--boton que implementa cancelar subscripcion para cancelar la subscripcion del usuario-->
    <button
      href="#0"
      class="popup-button w-100"
      v-on:click="cancelsubscription()"
    >
      cancelar subscripcion
    </button>
  </div>
</template>
<script>
import { UserSubscriptionService } from '../services';
import { AuthController } from '../controllers';
export default {
  name: 'cancelsubs',
  methods: {
    //metodo que implementa la cancelacion de la subscripcion llamando el metodo de User subscription service
    async cancelsubscription() {
      try {
        await UserSubscriptionService.cancelSubscription(
          AuthController.currentAccount.id
        );
        alert('subscripcion cancelada');
      } catch (error) {
        alert('There was an error');
      }
    }
  }
};
</script>
