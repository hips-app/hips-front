<template>
  <div class="mt-5">
    <button
      href="#0"
      class="popup-button w-100"
      v-on:click="renovarsubscription()"
    >
      Renovar subscripcion
    </button>
  </div>
</template>
<script>
import { UserSubscriptionService } from '../services';
import { AuthController } from '../controllers';
export default {
  name: 'renovarSubs',
  methods: {
    async renovarsubscription() {
      try {
        await UserSubscriptionService.renovarSubscription(
          AuthController.currentAccount.id
        );
        alert('subscripcion renovada');
      } catch (error) {
        alert('There was an error');
      }
    }
  }
};
</script>
