<template>
  <q-page class="flex flex-center">
    <p>REDIRECT</p>
    <Modal />
  </q-page>
</template>

<script>
import Modal from 'src/components/modal.vue';
import apolloClient from 'src/config/apollo';
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  name: "IndexPage",
  props: {
    url: {
      type: String,
      default: "https://www.google.com"
    },
  },
  setup(props) {
    return {};
  },
  components: { Modal }
})
</script>
