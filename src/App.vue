<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'App',
  setup(props) {
    const $q = useQuasar()
    console.log($q.platform.is.android);
    return {}
  }
})
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
}
</style>
