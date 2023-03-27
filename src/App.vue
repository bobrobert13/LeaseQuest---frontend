<template>
  <router-view />
  
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useGlobalUser,  } from './store/pinia.ts';
export default defineComponent({
  name: 'App',
  setup(props) {
    onMounted(() => {
     // console.log("PINIA STATE....", user.userState )

    });
   // const user = useGlobalUser();
    const $q = useQuasar()
    console.log("ANDROID... ", $q.platform.is.android , 'IPHONE.... ', $q.platform.is.iphone);
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
