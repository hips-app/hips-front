<template>
  <div>
    <div>
      <navbar></navbar>
    </div>
    <div id="header">
      MODIFY PERSONAL DATA
    </div>
    <div>
      <personal-data-form></personal-data-form>
    </div>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import PersonalDataForm from '../components/PersonalDataForm'

export default {
  name: 'ModifyPersonal',
  components: {
    navbar,
    PersonalDataForm
  }
}
</script>
<style scoped>
* {
  font-family: 'Raleway', Sans-serif;
  font-weight: 900;
}
#header {
  justify-content: center;
  font-size: 20px;
  font-weight: 900;
  color: white;
  letter-spacing: 10px;
  background: linear-gradient(to right, #ff5f6d, #ffc371);
  box-shadow: 0px 1px 5px rgb(47, 79, 79);
}
@media only screen and (max-width: 540px) {
  #header {
    letter-spacing: 6px;
  }
}
</style>
