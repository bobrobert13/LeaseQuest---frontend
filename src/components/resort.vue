
<template>
  <div class=" q-mb-xl q-mt-xl">

    <div class="relative q-pa-md justify-center col-12 row self-center items-center ">
      <q-avatar class="" size="120px" font-size="105px">
        <img src="../assets/3.jpg">
        <p id="show" class=" absolute absolute-bottom absolute-bottom-right "></p>
      </q-avatar>
      <div class=" col-7">
        <span class=" q-ml-sm text-weight-light text-primary text-left q-pa-xs">Beach Resort Morroco</span>
        <hr class=" text-weight-light">
        <span class="col-12  q-pa-xs float-right text-weight-bold text-primary"> Recomendado</span>
      </div>
    </div>

  </div>
</template>


<script scope>

export default {
  name: "resort",
  props: {},
  components: {
  },
  setup() {
    return {

    }
  }
}

</script>
<style>
#show {
  position: absolute;
  bottom: -10px;
  left: 85px;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: #eae6e6;
  border: none;
}

hr {
  opacity: 0.60;
}
</style>
