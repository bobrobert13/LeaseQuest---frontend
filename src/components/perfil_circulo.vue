<template>
  <div class=" row col-12 no-wrap justify-start">
    <router-link to="/profile">
      <q-avatar class="  " size="50px" font-size="52px">
        <img src="../assets/avatar.jpg">

      </q-avatar>

    </router-link>
    <p class=" self-center p-2 mt-1 col-7 font-light">Hola Billie.!</p>
    <div class=" self-center relative bottom-2 "><small> <q-icon name="map" size="20px" /> Venezuela</small></div>
  </div>

</template>


<script scope>

export default {
  name: "perfil_circulo",
  props: {},
  components: {},
  setup() {
    return {

    }
  }
}

</script>

<style>

</style>
