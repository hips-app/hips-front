<template>
  <div style="text-align:center">
    <a>
      <div>
        <div class="card-body">
          <table class="table">
            <caption>
              ingresar calorias consumidas en un dia
            </caption>
            <thead>
              <tr>
                <th class="text-white pr-2 pt-2 pl-5" scope="col">
                  Calorias Diarias
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-white pr-2 pt-2 pl-5">
                  <h4 class="text-light">Ingrese su calorias:</h4>
                  <input
                    v-model="calories"
                    type="text"
                    id="peso"
                    class="form-control"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td class="text-white pr-2 pt-2 pl-5">
                  <h4 class="text-light mt-4">
                    Ingrese su fecha de expiracion de la meta:
                  </h4>
                  <input
                    v-model="date"
                    type="date"
                    id="inputDate"
                    class="form-control"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td class="text-white pr-2 pt-2 pl-5">
                  <button
                    href="#0"
                    class="popup-button  mt-4"
                    v-on:click="sendCalories()"
                  >
                    enviar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
// eslint-disable-next-line no-undef
import { UserService } from '../services';
import { AuthController } from '../controllers';

export default {
  name: 'registroMeta',
  data() {
    return {
      calories: '',
      date: ''
    };
  },
  methods: {
    async sendCalories() {
      try {
        if (!(this.calories && this.date)) {
          alert('Please fill all fields');
          return;
        }
        console.log(this.calories);
        console.log(this.date);
        let Calories = Number(this.calories);
        await UserService.registerCalories(
          Calories,
          this.date,
          AuthController.currentAccount.id
        );
        alert('calorias agregadas');
      } catch (error) {
        alert('There was an error');
      }
    }
  }
};
</script>
