<template>
  <div class=" mt-8">
    <h5> Registro </h5>
    <div>
    <q-input v-model="user.name" type="text" label="Nombre" rounded outlined/>
    <q-input v-model="user.email" type="text" label="Correo" rounded outlined/>
    <q-input v-model="user.pass" type="text" label="Clave" rounded outlined />
    </div>
    <q-btn color="primary" label="Registro" @click="executeSignUp" />
  </div>
</template>
<script>
import { ref } from 'vue';
import { registro_usuario } from '../composables/useUser';

export default {
  setup(){
    const { registro } = registro_usuario();
    const user = ref({
      name: "",
      email: "",
      pass: "",
    });
     const executeSignUp = () => {
      registro(user.value);
     }
    return{
      user,
      executeSignUp,
    }
  }
}
</script>
<style>

</style>
