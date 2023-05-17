<template>
  <div class=" hide-scrollbar full-height q-pb-xl q-mb-xl">
    <TopImg />

    <div class=" bg-white py-5 ml-3 rounded-xl shadow-md  px-5 col-10 column  " style=" position: absolute; top: 35vh">
      <span class="text-h6 col-12 text-weight-bolder text-primary">Suit Marroco Beach, Av Toronto</span>
      <small class=" text-subtitle2 text-weight-light text-primary">Disponible <i class=" fas fa-tv "></i> <!-- uses solid style --> </small>
      <div class=" items-center col-12 row">


        <span style="opacity: 0.57;" class=" text-weight-light text-left">
          <q-icon name="place" class=" items-start" />
          AV Calorian St Maro N001. Postal
          80202
        </span>
      </div>

    </div>

    <div class="py-5 mt-12 px-5 column col-12 ">
      <span class="col-12 text-h6 text-weight-bolder text-primary">Detalles</span>
      <small class="col-12 text-weight-light text-accent">Alguna Descripcion</small>
    </div>

    <section>
      <Gallery />
    </section>
    <Metrica />

    <section>
      <div class="q-pa-lg q-mt-md justify-center row col-12 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
  <path id="icon" d="M15,30A31.228,31.228,0,0,1,4.394,28.41C1.52,27.32,0,25.8,0,24c0-2.011,1.963-3.714,5.528-4.8.61.837,1.3,1.7,2.057,2.573C4.842,22.4,3,23.289,3,24c0,1.185,5.376,3,12,3s12-1.815,12-3c0-.711-1.843-1.6-4.586-2.222.748-.862,1.44-1.727,2.057-2.573C28.037,20.287,30,21.99,30,24c0,1.795-1.52,3.319-4.394,4.409A31.228,31.228,0,0,1,15,30Zm0-4.181h0l-1.643-1.434C7.4,19.179,4.5,14.638,4.5,10.5a10.5,10.5,0,1,1,21,0c0,4.139-2.9,8.68-8.856,13.884L15,25.818ZM15,3a7.335,7.335,0,0,0-7.5,7.5c0,3.108,2.523,6.921,7.5,11.333,4.976-4.411,7.5-8.224,7.5-11.333A7.336,7.336,0,0,0,15,3Zm0,12a4.5,4.5,0,1,1,4.5-4.5A4.5,4.5,0,0,1,15,15Zm0-6a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,15,9Z" transform="translate(0 0)"/>
</svg>

      </div>
      <Mapa />
    </section>


    <Menu />

    <div class=" fixed-bottom-right m-8">
      <q-avatar size="54px"  text-color="white">
        <svg xmlns="http://www.w3.org/2000/svg" width="29.69" height="30" viewBox="0 0 29.69 30">
  <path id="icon" d="M24.09,30H5.6a3.026,3.026,0,0,1-2.985-2.576l-2.583-18A2.969,2.969,0,0,1,.6,7.2,3.037,3.037,0,0,1,3.016,6H7.358a6.651,6.651,0,0,1,2.5-4.228,7.9,7.9,0,0,1,9.969,0A6.649,6.649,0,0,1,22.333,6h4.342A3.011,3.011,0,0,1,29.69,9a2.966,2.966,0,0,1-.03.424l-2.585,18A3.024,3.024,0,0,1,24.09,30ZM3.016,9,5.6,27H24.09L26.675,9H22.384v3H19.369V9H10.323v3H7.308V9ZM14.845,3a4.656,4.656,0,0,0-4.414,3H19.26A4.657,4.657,0,0,0,14.845,3Z" transform="translate(0 0)"/>
</svg>


      </q-avatar>
    </div>

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
