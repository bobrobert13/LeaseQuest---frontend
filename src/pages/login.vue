<template>
  <div style=" " class="bg-img h-screen w-screen object-cover bg-white ">
    <div class="p-8 lg:w-1/2 mx-auto">
      <div class=" mt-28 relative-position top-0 h-2 shadow-2xl w-screen  ">
      </div>
      <div class=" w-screen column justify-center items-center container  mb-0">
        <div class=" flex justify-center m-auto w-28 h-28 rounded-full  ">
          <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62">
  <path id="icon" d="M9.08,52.92A31,31,0,1,1,52.92,9.08,31,31,0,1,1,9.08,52.92ZM5.636,31A25.364,25.364,0,1,0,31,5.636,25.393,25.393,0,0,0,5.636,31Zm11.525,9.72,4.611-3.244a11.273,11.273,0,0,0,18.457,0l4.609,3.244a16.912,16.912,0,0,1-27.677,0ZM36.636,28.182V22.546h5.638v5.636Zm-16.908,0V22.546h5.636v5.636Z" fill="#09b482"/>
</svg>
        </div>
        <!-- <p class=" text-weight-light">R&B</p> -->
      </div>
      <input class=" border-none text-gray-600 text-xs h-12 outline-none px-5 mt-8 py-2 bg-[#aa9f9f17] shadow-md w-full rounded-3xl"
      placeholder="Dirección de correo" v-model="user.email" type="email" label="Label" />

      <input class=" mb-2 border-none text-gray-600 text-xs h-12 outline-none px-5 mt-8 py-2 bg-[#aa9f9f17] shadow-md w-full rounded-3xl"
      placeholder="Contaseña de acceso" v-model="user.pass" type="password" label="Label" />
      <small class=" w-full text-right font-thin mt-12 p-4">¿No tienes cuenta?
      <b class=" text-weight-light color-[#09B482] cursor-pointer"> Registrate.</b></small>
      <q-btn
      id="btnLogin"
      class="  mt-20 w-full bg-[#09B482] text-gray-300 text-lg border-none outline-none rounded-3xl"
  label="Entrar" @click="executeLogin" />

    </div>
  </div>
</template>
<script>
import { async } from 'postcss-js';
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import { registro_usuario } from '../composables/useUser';
export default {

  components: {},
  setup() {
    const { login } = registro_usuario();
    const router = useRouter();
    const user = ref({
      email: "",
      pass: ""
    });
    const executeLogin = async () => {
      const userSession = await login(user.value);
      console.log("SESSION DATA-...", userSession);
    }

    return {
      router,
      user,
      executeLogin
    }
  }
}
</script>
<style>
#btnLogin{
  box-shadow: 0px 7px 24px -9px #09b482b0;
}
span{
  font-size: 12px;
}

</style>
