<template>
  <div class=" row col-12 no-wrap justify-start">
    <router-link to="/profile">
      <q-avatar class="  " size="50px" font-size="52px">
        <img src="../assets/avatar.jpg">

      </q-avatar>

    </router-link>
    <p class=" self-center p-2 mt-1 col-7 font-light">{{ nombre }}</p>
    <div class=" self-center relative bottom-2 "><small> <q-icon name="map" size="20px" /> Venezuela</small></div>
  </div>

</template>


<script scope>
import { ref } from 'vue';
export default {
  name: "perfil_circulo",
  props: ["nombre", ],
  components: {},
  setup(props) {
    const nombre = ref(props.nombre);
    return {
      nombre
    }
  }
}

</script>

<style>

</style>
