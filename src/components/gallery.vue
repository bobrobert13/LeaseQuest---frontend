
<template>
  <div class=" q-mb-md">
    <div class=" row justify-around no-wrap col-12">
      <div class="" style="border-radius: 14px;  ">
        <q-img src="../assets/1.jpg" style="border-radius: 8px; width: 170px; height: 110px " :ratio="16 / 9"
          spinner-color="primary" spinner-size="82px" />
      </div>
      <div class="" style="border-radius: 14px; ">
        <q-img src="../assets/2.jpg" style="border-radius: 8px; width: 170px; height: 110px " :ratio="16 / 9"
          spinner-color="primary" spinner-size="82px" />
      </div>

    </div>
  </div>
</template>


<script scope>

export default {
  name: "gallery",
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
* {
  padding: 0px;
  margin: 0px;
}
</style>
