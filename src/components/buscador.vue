<template>
  <div class=" " style="width: 80%;">
    <q-input class=" " style="" id="buscar" v-model="text" rounded outlined type="text" label="Buscar..." />
  </div>
</template>


<script scope>

export default {
  name: "buscador",
  props: {},
  components: {},
  setup() {
    return {

    }
  }
}

</script>

<style>
.q-field__control {
  height: 40px;
  background-color: #cbcad017;
  border: 1px solid #80CBB5;

}

.q-field__label {
  margin-top: -6px;
  margin-left: 4px;
  color: #80CBB5;
}
</style>
