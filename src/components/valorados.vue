<template>
  <div class="q-mt-md">
    <q-card class="my-card">
      <img src="../assets/1.jpg " style="height: 160px; border-radius: 14px;">
      <div class="row q-pt-sm justify-between">
        <div class="text-h6 text-weight-bolder text-primary ">120$ USD/ <span
            class="text-weight-bold text-accent">Mes</span>
        </div>
        <q-item style="position: relative; top: -10px" class=" self-center items-center">
          <svg width="20.647" height="19" viewBox="0 0 20.647 19">
            <g id="icon_toggle_star_24px" data-name="icon/toggle/star_24px" transform="translate(0.14)">
              <rect id="Boundary" width="19" height="19" transform="translate(-0.14)" fill="none" />
              <path id="_Color" data-name=" ↳Color"
                d="M9.254,12.873l5.719,3.144-1.518-5.926L18.508,6.1l-6.653-.514L9.254,0l-2.6,5.589L0,6.1l5.053,3.987L3.535,16.017Z"
                transform="translate(2 2)" fill="#dae39f" />
            </g>
          </svg>

          <q-item-section class=" text-weight-light ">Recomendado</q-item-section>
        </q-item>
      </div>
      <div>
        <q-list class="row no-wrap" style="
        font-size: 11px;
        position: relative; top: -14px; left: -15px;">
          <q-item class="self-center items-center">
            <svg id="Check" width="20" height="20" viewBox="0 0 20 20">
              <circle id="Elipse_1" data-name="Elipse 1" cx="10" cy="10" r="10" fill="#80CBB5" />
              <g id="icon_action_check_circle_24px_" data-name="icon/action/check_circle_24px ">
                <rect id="Boundary" width="20" height="20" fill="none" />
                <path id="_Color" data-name=" ↳Color" d="M4.455,7.91,1.114,4.776,0,5.821,4.455,10,14,1.045,12.886,0Z"
                  transform="translate(3 5)" fill="#fff" />
              </g>
            </svg>

            <q-item-section class="q-ml-xs">2 Habitaciones</q-item-section>
          </q-item>
          <q-item class="self-center items-center">
            <svg id="Check" width="20" height="20" viewBox="0 0 20 20">
              <circle id="Elipse_1" data-name="Elipse 1" cx="10" cy="10" r="10" fill="#80CBB5" />
              <g id="icon_action_check_circle_24px_" data-name="icon/action/check_circle_24px ">
                <rect id="Boundary" width="20" height="20" fill="none" />
                <path id="_Color" data-name=" ↳Color" d="M4.455,7.91,1.114,4.776,0,5.821,4.455,10,14,1.045,12.886,0Z"
                  transform="translate(3 5)" fill="#fff" />
              </g>
            </svg>
            <q-item-section class="q-ml-xs">2 Cocinas</q-item-section>
          </q-item>
          <q-item class="self-center items-center">
            <q-icon size="25px" color="primary" class="text-weight-bold" name="more" />
            <q-item-section class="q-ml-xs">Mas</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-card>
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
  box-shadow: none;
}
</style>
