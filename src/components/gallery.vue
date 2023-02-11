
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
    <span class=" text-center cursor-pointer block q-mt-md">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 40 38">
        <g id="BottomIMG" transform="translate(0 0.143)">
          <ellipse id="Elipse_1" data-name="Elipse 1" cx="20" cy="19" rx="20" ry="19" transform="translate(0 -0.143)"
            fill="#09B482" />
          <path id="Polígono_1" data-name="Polígono 1" d="M10,0,20,18H0Z" transform="translate(30 29.857) rotate(180)"
            fill="#fafafa" />
        </g>
      </svg>

    </span>

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
