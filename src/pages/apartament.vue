<template>
  <div class=" hide-scrollbar full-height q-pb-xl q-mb-xl">
    <TopImg />

    <div class="q-pa-lg col-12 column ">
      <span class="text-h6 col-12 text-weight-bolder text-primary">Suit Marroco Beach, Av Toronto</span>
      <small class=" text-subtitle2 text-weight-light text-primary">Disponible</small>
      <div class=" items-center col-12 row">

        <span style="opacity: 0.57;" class=" q-pt-md text-weight-light text-left">
          <q-icon name="place" class=" items-start" />
          AV Calorian St Maro N001. Postal
          80202
        </span>
      </div>

    </div>

    <div class="q-pa-lg column col-12 ">
      <span class="col-12 text-h6 text-weight-bolder text-primary">Detalles</span>
      <small class="col-12 text-weight-light text-accent">Alguna Descripcion</small>
    </div>

    <section>
      <Gallery />
    </section>

    <Resort />
    <Metrica />

    <section>
      <div class="q-pa-lg text-center q-ma-md column col-12 ">
        <span class="col-12 text-h6 text-weight-light">Ubicacion</span>
      </div>
      <Mapa />
    </section>

    <div class=" q-mt-xl ">
      <q-btn style="margin: auto;" class="q-pa-md block text-center" rounded color="primary" label="Quiero reservar"
        @click="" />
    </div>

    <Menu />


  </div>
</template>


<script scope>
import Menu from 'src/components/menu.vue';
import TopImg from '../components/topImg.vue';
import Gallery from 'src/components/gallery.vue';
import Resort from 'src/components/resort.vue';
import Metrica from '../components/metrica.vue';
import Mapa from '../components/mapa.vue';

export default {
  name: "apartament",
  props: {},
  components: {
    Menu,
    TopImg,
    Gallery,
    Resort,
    Metrica,
    Mapa
  },
  setup() {
    return {

    }
  }
}

</script>
<style>
* {
  padding: 0px;
  margin: 0px;
}
</style>
