<template>


  <div class="q-mt-md ">
    <q-scroll-area class=" " style=" max-width: 100vw ; width: 100vw; height: 280px">
    <q-card v-for="(index) in 1" class=" my-card mr-20 rounded-bl-xl rounded-br-xl "
      style=" width: 80%; border-top-right-radius: 15px; border-top-left-radius: 15px">
      <img src="../assets/1.jpg " class=" h-40 object-cover  bg-cover w-max block "
        style=" border-top-right-radius: 15px; border-top-left-radius: 15px;"/>
      <div class=" columns-1 px-4 py-4 justify-start">
        <span class=" bg-white font-thin text-primary">Recomendado</span>
        <div class="text-h6 text-weight-bolder m-0 p-0 text-primary ">120$ USD/ <span
            class="text-weight-bold m-0 p-0 text-accent">Month</span>
        </div>
        <span class=" text-weight-light m-0 p-0 font-sans text-accent font-medium text-xs">4000St AV. Lonely rooms and
          strike.</span>
      </div>
    </q-card>
  </q-scroll-area>
  </div>


</template>
<script scope>

export default {
  name: "valorados",
  props: {},
  components: {},
  setup() {
    return {

    }
  }
}

</script>

<style>
.my-card {
  box-shadow: 0px 0.2px 10px 0px #baefdf38;
  border: none;
}

</style>
