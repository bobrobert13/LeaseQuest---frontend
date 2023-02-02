
<template>

  <div class="full-width relative-position">
    <q-img src="../assets/1.jpg" style="height: 35vh;" :ratio="16/9" spinner-color="primary" spinner-size="82px" />
    <div
      class=" absolute-bottom-right q-pa-lg q-mr-md col-auto text-primary text-caption q-pt-md row no-wrap items-center">
      <q-icon size="45px" name="place" />
    </div>
  </div>

</template>


<script scope>

export default {
  name: "topImg",
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
