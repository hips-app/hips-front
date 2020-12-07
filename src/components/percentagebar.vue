<template>
  <div>
    <div id="myProgress">
      <div id="myBar">
        <a>Progress</a>
      </div>
    </div>
  </div>
</template>
<script>
import { AccountTypesEnum } from '../commons/enums';
import { AuthController } from '../controllers';
import { UserService } from '../services';

export default {
  name: 'percent',
  data() {
    return {
      percent: 10,
    };
  },
  created() {
    if (AuthController.currentAccount.type == AccountTypesEnum.UserService) {
      try {
        UserService.getpercent().then((this.percent = this.response));
      } catch (error) {
        alert('There was an error');
      }
    }
  },
  mounted() {
    var elem = document.getElementById('myBar');
    elem.style.width = this.percent + '%';
  },
};
</script>
<style>
#myProgress {
  width: 100%;
  background-color: white;
}
#myBar {
  width: 1%;
  height: 20px;
  background-color: #d76136;
}
</style>
