<template>
<div class=" w-full z-10 h-full">
<Circle :style="{
  left: '260px',
  top: '60px',
  right:' 0px',
  bottom: '0px',
  bg_color: '#E4F3F3',
  opacity: '0.60'
}" />


  <header class=" row col-12  justify-between p-3">
    <div class=" "> 
      <q-img
        src="../assets/logos/logo-no-background.png"
        spinner-color="primary"
        spinner-size="82px"
      class=" w-20 h-12"
      />
    </div>
    <div class=" h-16 flex flex-col items-end justify-end mr-5 " > <p class=" text-sm font-light  ">Lorem Ipsum</p> </div>
  </header>

  <section class="z-50">
    <div class=" columns-1 p-6">
      <span class=" text-4xl font-medium text-[#090755] ">Hola, Bienvenido!</span>
      <p class=" text-[#1F4D3F] text-xs opacity-60 mt-1">Encuentra lo que buscas rápido y fácil.</p>
    </div>
  </section>

  <section class=" p-6 pt-0 mt-7">
    <div class=" columns-1">

      <q-input placeholder="Correo Electronico" class="  text-gray-100  "  outlined v-model="user.email"  dense>
      </q-input>
<br>
<Circle :style="{
  left: '-80px',
  top: '300px',
  right:'0px',
  bottom: '0px',
  bg_color: '#000000',
  opacity: '0.07'
}" />
      <q-input type="password" placeholder="Contraseña"  class="  mt-2" outlined v-model="user.pass"  dense >
      </q-input>
    </div>
    <p class=" text-right m-1 mt-1 text-xs cursor-pointer text-[#787989]">¿No tienes cuenta?</p>
  </section>

  <div class=" w-44 mt-20 m-auto p-3">
    <q-btn class=" bg-[#000000] rounded-3xl w-full p-1 text-white"  label="Lorem Ipsum" @click="login(user)" />
    <div class=" flex">
    </div>
  </div>

  <footer class="  fixed-bottom">
        <p class=" ml-3 font-light text-xs opacity-75">Robert_Web 2023</p>
  </footer>

  <Circle :style="{
  left: '220px',
  top: '510px',
  right:'0px',
  bottom: '0px',
  bg_color: '#E4F3EF',
  opacity: '0.60'
}" />

</div>
</template>
<script>
import {ref, onMounted} from 'vue';
import { useRouter } from 'vue-router';
import { registro_usuario } from '../composables/useUser';
import { redirect } from '../composables/redirect';
import { useGlobalUser } from '../store/pinia.ts';
import Circle from 'src/components/decoration/circle.vue';
export default {

  components: { Circle },
  setup() {
    onMounted(() => {
      isLogged(store.userState.token)
    });
    const { isLogged  } = redirect();
    const { login } = registro_usuario();
    const router = useRouter();
    const store = useGlobalUser();
    let session;
    const user = ref({
      email: "",
      pass: ""
    });

    // login(user.value);
    return {
      login,
      store,
      router,
      user,
    }
  }
}
</script>
<style>

#btnLogin{
  /* box-shadow: 0px 7px 24px -9px #09b482b0; */
}
span{
  font-size: 12px;
}

</style>
