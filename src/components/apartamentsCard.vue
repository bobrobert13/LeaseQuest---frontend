<template>
  <div class=" ">
    <q-scroll-area class=" col-12" style="width: 100vw; height: 100vh;">
      <div v-for="n in 5">
        <q-card class=" shadow-none col-sm-12 col-xs-12 row py-4 px-4 items-start self-center">
          <div class="col-6 no-wrap self-center border-none" style=" margin-bottom: 0px;">
            <div style="color: #80CBB5;" class=" mb-1 text-sm text-weight-bold">Suit Marroco Beach, Av
              Toronto
            </div>
            <div class=" columns-1 col-12 w-full text-accent">
              <p class="text-xs font-medium p-0 m-0  ">Suit Marroco Beach, Av
                Toronto</p>
              <p class=" text-xs p-0 mt-0 font-medium"> <q-icon class=" pl-0" name="place" /> 6.1km de camino</p>
              <p class=" text-xs p-0 m-0 font-medium">Stars</p>
            </div>
          </div>
          <div class=" col-5 ">
            <img class=" col-12 w-32 h-32 object-cover bg-cover" src="../assets/2.jpg" style=" border-radius: 14px;">
          </div>
              <p class=" self-center">ir</p>
        </q-card>


        <div class=" w-2/5 bg-primary h-1 m-auto"></div>
      </div>
    </q-scroll-area>

  </div>
</template>

<script>
export default {
  name: "apartamentsCard",
  setup(props) {
    return {

    }
  }
}
</script>

<style lang="">

</style>
