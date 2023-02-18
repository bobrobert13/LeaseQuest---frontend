
<template>

  <div class="full-width relative-position">

    <q-img src="../assets/1.jpg" style="height: 45vh;" :ratio="16 / 9" spinner-color="primary" spinner-size="82px" />
      <router-link to="/home">
    <div class=" row w-full absolute-top-left p-4 justify-between col-12 cursor-pointer">
    <q-avatar size="40px" color="white" class=" opacity-80" text-color="text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" width="20.41" height="18.41" viewBox="0 0 20.41 18.41">
  <path id="Path" d="M7.5,7.249H20.41v3.911H7.5L12,15.644,9.225,18.41,0,9.2,9.225,0,12,2.766Z" fill="#f2f2f2"/>
</svg>
</q-avatar>

<q-avatar class="  " size="40px">
        <img src="../assets/3.jpg">
      </q-avatar>
    </div>
  </router-link>

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
