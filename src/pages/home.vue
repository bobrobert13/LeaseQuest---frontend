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
    <q-card-section class="row items-center col-12">
      <Perfil_circulo :nombre="nombreUsuario" />
    </q-card-section>

  <div class=" columns-1 col-12">
  <div class=" row col-12 font-semibold my-5">
       <p  class=" text-2xl  col-10 pl-6 mb-5 text-[#090755]  "> Encuentra y consigue tu plan indicado.!</p>
      </div>
      <div class=" row w-full justify-around ">
        <q-select style="" class=" overflow-hidden h-13 p-0 w-40 rounded-3xl bg-slate-100 " label="Desde" filled />
        <q-select class=" w-40 rounded-3xl overflow-hidden h-13  bg-slate-100 " label="Hasta" filled />
        <div class=" row relative col-12 px-3 mt-2 no-wrap">
          <input class="  mt-2 text-gray-600 col-12 p-4 border-none
          outline-none bg-slate-50 focus:outline-none rounded-3xl
        " placeholder="Busca en los mejores Ressorts" type="text" />
        <div class=" self-center items-center
         absolute right-6 pb-1  bottom-3 cursor-pointer rounded-3xl  ">
          <q-icon size="24px" name="search" />
         </div>
        </div>

      </div>
    </div>

    <div  class=" columns-1 mt-2 w-full p-6 ">
    <p class=" text-sm font-light text-[#090755] ">Ressorts</p>
    <div class=" row w-full justify-between no-wrap" >
        <div v-for="(rs, index) in ressortsCircle" class=" row  cursor-pointer border-double no-scroll rounded-full w-20 h-20 ">
          <q-img class=" object-cover w-20 shadow-xl h-20 no-scroll" src="../assets/1.jpg" alt="historia"></q-img>
        </div>
      </div>
    </div>

    <div class=" q-pa-md " >
       <span class=" text-xl sm:text-md text-weight-bolder md:textarea-md lg:text-lg text-primary">Mejor Valorados</span>
      <Valorados />
    </div>

    <div class=" mt-2 ">
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
import { useGlobalUser } from '../store/pinia.ts';
import { getAllApartament } from '../composables/useApartaments';
import { useRessort} from '../composables/useRessort'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default {
  name: "home",
  props: {},
  components: {
    Buscador,
    Perfil_circulo,
    Valorados,
    ApartamentsCard,
    Menu,
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const { getAllRessorts} = useRessort();
    const store = useGlobalUser();
    const lista = ref(null);
    const styleDiv = ref("");
    const loaderHome = ref(false);
    const ressortsCircle = ref([]);
    onMounted(() => {
      getAllRessorts().then((data)=> {
        ressortsCircle.value = data;
      }).catch((e) => {
        console.log(e);
      })
      console.log("USUARIO en localStorage:  ," , store.userState.user , ' TOKEN: , ' , store.userState.token);
    });
    const nombreUsuario = store.userState.user.fullName;
    return {
      ressortsCircle,
      nombreUsuario,
      store,
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
