
<template>
  <div class=" col-12 col-sm-12 col-xs-12  mt-10">

    <div class="row mr-3 relative justify-center col-12 self-center items-center ">
      <q-avatar class="" size="100px" font-size="105px">
        <img src="../assets/3.jpg">
        <p id="show" class=" absolute"></p>
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
