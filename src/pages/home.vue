<template >
  <div class=" z-0 relative">

  <div v-if=" loaderHome == true" class=" z-20 w-full h-full absolute-center row justify-center " >
    <q-spinner
    class=" mt-60 animate-pulse text-xl w-24 h-24 "
    color="primary"
    size="3rem"
    :thickness="200"
  />
  </div>
  <div v-if=" loaderHome !== true">
  <div  class=" bg-white " style=" box-shadow: 0px -9px 30px 0px #b7b3b0;  margin-top: -25px; border-bottom-left-radius: 17%; border-bottom-right-radius: 17%;">
    <q-card-section class="row items-center justify-around q-mt-md col-12">

      <Buscador />
      <Perfil_circulo />
    </q-card-section>
  </div>
    <div class="q-pa-lg" :style="styleDiv" @click="outDiv">

      <span class=" text-xl sm:text-md text-weight-bolder md:textarea-md lg:text-lg text-primary">Mejor Valorados</span>
      <Valorados />
    </div>

    <div class=" mt-3 ">
      <div class="row q-mb-md justify-around self-center content-center ">
        <span class="text-h6 text-weight-bolder text-primary">Disponibles</span>
        <span class="text-accent pt-1">Mostrando 6 de 56</span>
      </div>
      <ApartamentsCard />
    </div>
  </div>
    <Menu />
  </div>
</template>


<script scope>
import Buscador from "../components/buscador.vue";
import Perfil_circulo from "../components/perfil_circulo.vue";
import Valorados from "../components/valorados.vue";
import ApartamentsCard from "src/components/apartamentsCard.vue";
import Menu from "../components/menu.vue";
import { ref, refs, onMounted } from 'vue';


export default {
  name: "home",
  props: {},
  components: {
    Buscador,
    Perfil_circulo,
    Valorados,
    ApartamentsCard,
    Menu,
    Menu
  },
  setup() {
    const lista = ref(null);
    const styleDiv = ref("");
    const loaderHome = ref(false);
    // onMounted(() => {
    // });
    return {
      loaderHome,
      styleDiv,
      outDiv: () => { styleDiv.value = 'opacity: 0;  transition-delay: 6s; transition: all 0.4s ease-out;' },
      lista
    }
  }
}

</script>

<style>
*{
  padding: 0px;
  overflow-x: hidden;
}
body {
  background-color: #f1f1f1;
}
.bo {
  opacity: 0.1;
  transition-delay: 1s;
  transition: all 0.4s ease-out;
}
</style>
