<template>
  <div class=" ">
    <q-scroll-area class="q-mr-lg col-12" style="width: 100vw; height: 59vh;">
      <div v-for="n in 6">
        <q-card class="my-card col-12 row q-mr-lg items-start self-center vertical-top">
          <div class="col-6 no-wrap self-center column" style="">
            <div style=" font-size: 18px; color: #80CBB5;" class=" text-weight-bold">Suit Marroco Beach, Av Toronto
            </div>
            <div class="text-weight-light text-accent">
              <p style="font-size: 14px;">Todos los servicios al día, conta...</p>
            </div>

            <div style=" font-size: 12px; " class=" col-12 row justify-between q-pr-sm">
              <q-list class="" style="">
                <div class="" style="
            ">
                  <q-icon size="12px" class="text-weight-bold " color="primary" name="start" />
                  <span class="q-ml-xs text-weight-bold text-primary">Calidad</span>
                </div>
              </q-list>
              <q-list class="" style="">
                <div class="" style="
            ">
                  <q-icon size="12px" class="text-weight-bold " color="primary" name="check" />
                  <span class="q-ml-xs text-weight-bold text-primary">Sala</span>
                </div>
              </q-list>
              <q-list class="" style="">
                <div class="" style="
            ">
                  <q-icon size="12px" class="text-weight-bold " color="primary" name="check" />
                  <span class="q-ml-xs text-weight-bold text-primary">Sala</span>
                </div>
              </q-list>
            </div>


          </div>
          <div class="q-ml-sm">
            <img class="" src="../assets/2.jpg" style="height: 132px; width: 161px; border-radius: 14px;">
          </div>

          <div class="q-mb-lg"><span style="font-size: 12px;" class="text-accent">Export Suites, America:
              Paquetes
              incluidos así como
              planes...</span>
          </div>

        </q-card>
      </div>
    </q-scroll-area>

  </div>
</template>

<script>
export default {
  name: "apartamentsCard",
  setup(props) {
    return {}
  }
}
</script>

<style lang="">

</style>
