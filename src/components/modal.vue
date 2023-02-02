<template>
  <div class="">

    <!-- MODAL UNO  -->
    <q-card class="my-card q-mb-md col-12 bg-primary ">
      <q-card-section class=" q-pt-lg q-pl-lg q-pr-lg q-pb-xs text-center">
        <q-avatar style=" margin: 0px auto; top: -20px" class=" relative-position" size="65px" font-size="52px"
          color="teal" text-color="white" />
        <div class=" col-12 text-h6 text-white text-weight-bold "> ¿Desea realizar esta accion? </div>
      </q-card-section>
      <q-card-section class="  text-center q-pb-lg ">
        <span class="text-weight-light text-white ">
          Los datos para la finalización de la operación
          se te serán enviados por Whatsapp
        </span>
      </q-card-section>
      <div class=" row justify-between col-8 ">
        <q-avatar class=" q-ml-lg" size="67px" font-size="52px" color="white" text-color="white" />
        <q-avatar class=" q-mr-lg" size="67px" font-size="52px" color="white" text-color="white" />
      </div>
    </q-card>

    <!-- MODAL DOS -->
    <q-card class="my-card q-mb-md col-12 bg-primary ">
      <q-card-section class=" q-pt-lg q-pl-lg q-pr-lg q-pb-xs text-center">
        <q-avatar style=" margin: 0px auto; top: -20px" class=" relative-position" size="65px" font-size="52px"
          color="teal" text-color="white" />

        <div class=" col-12 text-h6 text-white text-weight-bold "> Buena elección.! </div>
      </q-card-section>
      <q-card-section class="  text-center q-pb-lg ">
        <span class="text-weight-light text-white ">
          Los datos para la finalización de la operación
          se te serán enviados por Whatsapp
        </span>
      </q-card-section>
      <div class=" row justify-between col-8 ">
        <q-avatar class=" q-ml-lg" size="67px" font-size="52px" color="white" text-color="white" />
        <q-avatar class=" q-mr-lg" size="67px" font-size="52px" color="white" text-color="white" />
      </div>
    </q-card>


    <!-- MODAL DE FILTROS -->
    <q-card style=" " class="my-card col-12 bg-white ">
      <q-card-section class=" q-pt-lg q-pl-lg q-pr-lg q-pb-xs text-center">
        <q-avatar style=" margin: 0px auto; top: -20px" class=" relative-position" size="65px" font-size="52px"
          color="teal" text-color="white" />

        <div class=" col-12 text-h6 text-primary text-weight-bold "> Precisa lo que buscas </div>
      </q-card-section>

      <q-card-section class=" text-center ">
        <span class=" text-primary text-weight-light text-h6 ">Suites</span>
        <div class=" justify-center items-center q-pa-sm row no-wrap self-center">
          <span class=" q-mr-sm text-weight-light text-primary" style=" font-size: 11px">Ocultar</span>
          <q-toggle size="66px" color="green" :dense="true" icon-color="white" indeterminate-value="maybe"
            v-model="theModel2" label="" />
          <span class=" q-mr-sm text-weight-light text-primary" style=" font-size: 11px">Mostrar</span>
        </div>
      </q-card-section>

      <q-card-section style=" margin-top: -10px" class=" text-center ">
        <span class=" text-primary text-weight-light text-h6 ">Mejor Puntuados</span>
        <div class=" justify-center items-center q-pa-sm row no-wrap self-center">
          <span class=" text-weight-light text-primary q-mr-sm" style=" font-size: 11px">Ocultar</span>
          <q-toggle size="66px" color="primary" :dense="true" icon-color="white" indeterminate-value="maybe"
            v-model="theModel2" label="" />
          <span class=" q-mr-sm text-weight-light text-primary" style=" font-size: 11px">Mostrar</span>
        </div>
      </q-card-section>

      <q-card-section style=" margin-top: -10px" class=" text-center ">
        <span class=" text-primary text-weight-light text-h6 ">Centricos</span>
        <div class=" justify-center items-center q-pa-sm row no-wrap self-center">
          <span class=" q-mr-sm text-weight-light text-primary" style=" font-size: 11px">Ocultar</span>
          <q-toggle size="66px" color="green" :dense="true" icon-color="white" indeterminate-value="maybe"
            v-model="theModel2" label="" />
          <span class=" q-mr-sm text-weight-light text-primary" style=" font-size: 11px">Mostrar</span>
        </div>
      </q-card-section>
      <div class=" q-pt-md row justify-between col-8 ">
        <q-avatar class=" q-ml-lg " size="67px" font-size="52px" style="background-color: #F3F2F2;"
          text-color="white" />
        <q-avatar class=" q-mr-lg" size="67px" font-size="52px" style="background-color: #C1C1C1;" text-color="white" />
      </div>
    </q-card>

  </div>
</template>


<script>
import { ref } from 'vue';
export default {

  name: "modal",
  setup() {
    const theModel = ref(null);
    const theModel2 = ref('maybe');

    return {
      theModel,
      theModel2,
      reset() {
        theModel.value = null;
        theModel2.value = 'maybe'
      }
    }

  }
}
</script>

<style>
.my-card {
  box-shadow: none;
  border-radius: 45px;
  padding: 1em;

}

.q-toggle__track {
  background-color: #3CC39C;
}
</style>
