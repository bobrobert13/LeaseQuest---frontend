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
  background-color: #f9f9f9fe;
  border: none;
  outline: none;

}

.q-field__label {
  margin-top: -6px;
  margin-left: 4px;
  color: #80CBB5;
}
</style>
