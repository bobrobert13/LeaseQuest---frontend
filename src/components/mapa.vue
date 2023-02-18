<template>
  <div class=" map col-12 ">
    <iframe style="filter: contrast(1.2) opacity(0.8);" marginheight="0" marginwidth="0" title="map" scrolling="no"
      src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
      width="100%" height="100%" frameborder="0"></iframe>
  </div>
</template>

<script scope>

export default {
  name: "mapa",
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
.map {
  height: 100vh;

}
</style>
