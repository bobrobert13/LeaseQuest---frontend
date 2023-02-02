<template>
  <div class="">
    <q-card-section class="row items-center justify-around q-mt-md col-12">
      <Buscador />
      <Perfil_circulo />
    </q-card-section>

    <div class="q-pa-lg">
      <span class="text-h6 text-weight-bolder text-primary">Mejor Valorados</span>
      <Valorados />
    </div>

    <div class="q-pa-lg " style="margin-top: -25px;">
      <div class="row q-mb-md justify-between">
        <span class="text-h6 text-weight-bolder text-primary">Disponibles</span>
        <span class="text-accent text-weight-light q-mr-sm">Mostrando 6 de 56</span>
      </div>
      <ApartamentsCard />
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
    return {

    }
  }
}

</script>
