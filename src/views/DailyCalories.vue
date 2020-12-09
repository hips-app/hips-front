<template>
  <div style="text-align:center">
    <a>
      <div>
        <div class="card-body">
          <table class="table">
            <caption>
              ingresar calorias consumidas el dia de hoy
            </caption>
            <thead>
              <tr>
                <th scope="col">
                  Calorias Diarias
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <!--input que atrapa el numero de calorias consumidas por el usuario-->
                  <h4>Ingrese su calorias:</h4>
                  <input
                    v-model="calories"
                    type="number"
                    id="peso"
                    class="form-control"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <h4>
                    Ingrese su fecha de expiracion de la meta:
                  </h4>
                  <!--input que atrapa la fecha en la cual se consumieron en el dia especificado-->
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
                <td>
                  <!--boton que llama el metodo manda las calorias a la base de datos-->
                  <button
                    href="#0"
                    class="btn btn-primary  mt-4"
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
      //los datos que se recolectaran en los v-model
      calories: '',
      date: ''
    };
  },
  methods: {
    //metodo que envia los datos recolectados a la base de datos usando los servicios de userService
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
        this.$router.replace(this.$route.query.redirect || '/personal-data')
        alert('calorias agregadas');
      } catch (error) {
        alert('There was an error');
      }
    }
  }
};
</script>
