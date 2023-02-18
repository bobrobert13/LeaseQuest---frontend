
<template>
  <div class=" mt-7 ">

    <div class=" q-pa-sm col-12 column " id="metrica">
      <div class="row  relative-position items-center q-pa-sm col-12">
        <span class=" q-ml-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
            <rect id="Rectángulo_30" data-name="Rectángulo 30" width="29" height="29" rx="4" fill="#26bd91" />
          </svg>
        </span>
        <span style="font-size: 1.6em;" class=" text-weight-thin q-ml-sm">Calidad</span>
        <span id="value-dep" style="font-size: 1.6em;" class=" text-weight-light absolute-bottom-right ">75%</span>

      </div>
      <div class=" q-pr-lg q-pl-lg ">
        <div class=" relative" style="width: 100%; height: 15px; background: #DFE4E3; border-radius: 18px;">
          <div class="absolute" style=" width: 65%; height: 15px;background: #5DD5B2; border-radius: 18px;"></div>
        </div>
      </div>
    </div>

    <div class=" q-pa-sm col-12 column " id="metrica">
      <div class="row  relative-position items-center q-pa-sm col-12">
        <span class=" q-ml-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
            <rect id="Rectángulo_30" data-name="Rectángulo 30" width="29" height="29" rx="4" fill="#26bd91" />
          </svg>
        </span>
        <span style="font-size: 1.6em;" class=" text-weight-thin q-ml-sm">Costo</span>
        <span id="value-dep" style="font-size: 1.6em;" class=" text-weight-light absolute-bottom-right ">40%</span>

      </div>
      <div class=" q-pr-lg q-pl-lg ">
        <div class=" relative" style="width: 100%; height: 15px; background: #DFE4E3; border-radius: 18px;">
          <div class="absolute" style=" width: 40%; height: 15px;background: #5DD5B2; border-radius: 18px;"></div>
        </div>
      </div>
    </div>


    <div class=" q-pa-sm col-12 column " id="metrica">
      <div class="row  relative-position items-center q-pa-sm col-12">
        <span class=" q-ml-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
            <rect id="Rectángulo_30" data-name="Rectángulo 30" width="29" height="29" rx="4" fill="#26bd91" />
          </svg>
        </span>
        <span style="font-size: 1.6em;" class=" text-weight-thin q-ml-sm">Equipamiento</span>
        <span id="value-dep" style="font-size: 1.6em;" class=" text-weight-light absolute-bottom-right ">80%</span>

      </div>
      <div class=" q-pr-lg q-pl-lg ">
        <div class=" relative" style="width: 100%; height: 15px; background: #DFE4E3; border-radius: 18px;">
          <div class="absolute" style=" width: 70%; height: 15px;background: #5DD5B2; border-radius: 18px;"></div>
        </div>
      </div>
    </div>



  </div>
</template>


<script scope>

export default {
  name: "metrica",
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
#value-dep {
  bottom: 0px;
  right: 30px;
}
</style>
