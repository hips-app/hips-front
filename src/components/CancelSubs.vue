<template>
    <div class="mt-5">
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
    async cancelsubscription() {
        try {
            await UserSubscriptionService.cancelSubscription(AuthController.currentAccount.id);
            alert("subscripcion cancelada");
        } catch (error) {
        alert('There was an error');
        }

    }

 }
}
</script>