<template>
<div class=" w-full h-full">

  <header class=" row col-12 justify-between p-6">
    <div class=" "> loguito</div>
    <div> <p class=" font-light ">texto</p> </div>
  </header>

  <section>
    <div class=" columns-1 p-6">
      <span class=" text-4xl font-medium text-[#090755] ">Hola, Bienvenido!</span>
      <p class=" text-[#9E9FAC] mt-1">Comienza hoy mismo a hacer tus reservas.</p>
    </div>
  </section>

  <section class=" p-6">
    <div class=" columns-1">
    <label class=" font-light text-[#787989]" for="">Indique su correo electronico</label>
      <q-input class=" row-auto mt-2 text-gray-400" outlined v-model="user.email" label="ejm: rob132ca@gmail.com" stack-label :dense="dense">
        <template v-slot:prepend>
          <div class=" row-auto opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" width="20.003" height="20" viewBox="0 0 20.003 20">
  <path id="icon" d="M10,20A10,10,0,1,1,10,0c3.206,0,5.7.877,7.423,2.606S20,6.813,20,10a5.706,5.706,0,0,1-1.116,3.83A3.643,3.643,0,0,1,16,15a2.4,2.4,0,0,1-2.535-1.395A5,5,0,1,1,13,6V5h2v5c0,2.439.187,3,1,3a1.68,1.68,0,0,0,1.489-.606A4.06,4.06,0,0,0,18,10c0-5.308-2.691-8-8-8a8,8,0,1,0,4.693,14.48l1.173,1.62A9.934,9.934,0,0,1,10,20ZM10,7a3,3,0,1,0,3,3A3,3,0,0,0,10,7Z" transform="translate(0.003 0)"/>
</svg>
          </div>
        </template>
      </q-input>

<br>
      <label class=" font-light text-[#787989]" for="">Indique su contraseña</label>
      <q-input type="password" class=" row-auto mt-2" outlined v-model="user.pass" label="*******" stack-label :dense="dense">
        <template v-slot:prepend>
          <div class=" row-auto opacity-30">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20">
  <path id="icon" d="M2,20a1.924,1.924,0,0,1-2-1.833V9.833A1.924,1.924,0,0,1,2,8H3V5A5,5,0,1,1,13,5V8h1a1.924,1.924,0,0,1,2,1.833v8.333A1.924,1.924,0,0,1,14,20Zm0-2H14V10H2ZM11,8V5A3,3,0,1,0,5,5V8ZM7,14a1,1,0,1,1,1,1A1,1,0,0,1,7,14Z"/>
</svg>

          </div>
        </template>
      </q-input>
    </div>
    <p class=" text-right m-2 text-[#787989]">¿No tienes cuenta?</p>
  </section>

  <div class=" w-full p-6">
    <q-btn class=" bg-[#09B482] w-full p-3 text-white"  label="entrar" @click="login(user)" />
    <!-- <p class=" text-center p-4 text-[#787989]">Ó, inicia session con Google</p>
    <button class=" p-3 border shadow-none border-gray-300 bg-white" type="">Sign in with Google</button> -->
    <div class=" flex">
    </div>
    <!-- <p class=" mt-3">¿Olvidaste tu contraseña?</p> -->
  </div>


</div>
</template>
<script>
import {ref, onMounted} from 'vue';
import { useRouter } from 'vue-router';
import { registro_usuario } from '../composables/useUser';
import { redirect } from '../composables/redirect';
import { useGlobalUser } from '../store/pinia.ts';
export default {

  components: {},
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

    login(user.value);
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
  box-shadow: 0px 7px 24px -9px #09b482b0;
}
span{
  font-size: 12px;
}

</style>
