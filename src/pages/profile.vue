<template>
  <div>
    <div class="  full-width relative-position">
      <q-img src="../assets/portada.jpg" style="height: 190px;" :ratio="16 / 9" spinner-color="primary"
        spinner-size="82px" />
    </div>
    <div id="avatar" class=" absolute-center ">
      <q-avatar size="100px" font-size="52px">
        <q-img src="../assets/billie.jpg" style="height: 100px;" :ratio="16 / 9" spinner-color="primary" />
      </q-avatar>
      <p class=" q-pa-sm text-weight-light font-light text-center">Billie Eilish</p>
    </div>
    {{ datePerfil }}
    <section id="menu" class=" col-12 q-pa-lg bg-primary" rounded>
      <q-card-section>
        <p class=" text-h6 text-white text-weight-bold">Cuenta</p>
      </q-card-section>

      <div class="">
        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
                <circle id="Elipse_9" data-name="Elipse 9" cx="19" cy="19" r="19" fill="#fff" />
              </svg>

            </q-item-section>
            <q-item-section>
              <span class=" text-h6 text-white text-weight-bold">Informacion </span>
            </q-item-section>
          </q-item>
        </q-list>
        <br>
        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
                <circle id="Elipse_9" data-name="Elipse 9" cx="19" cy="19" r="19" fill="#fff" />
              </svg>

            </q-item-section>
            <q-item-section>
              <span class=" text-subtitle1 text-white text-weight-bold">Historial </span>
            </q-item-section>
          </q-item>
        </q-list>
        <br>
        <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
                <circle id="Elipse_9" data-name="Elipse 9" cx="19" cy="19" r="19" fill="#fff" />
              </svg>

            </q-item-section>
            <q-item-section>
              <span class=" text-subtitle1 text-white text-weight-bold">Seguridad </span>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <!-- FIN DE LISTADO DE OPCIONES CUENTA -->
      <br><br>
      <q-card-section class=" q-pa-sm ">
        <p class=" text-h6 text-white text-weight-bold">Notificaciones</p>
        <br>
        <div>
          <q-item clickable>
            <q-item-section avatar>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
                <circle id="Elipse_9" data-name="Elipse 9" cx="19" cy="19" r="19" fill="#fff" />
              </svg>
            </q-item-section>
            <q-item-section>
              <span class=" text-subtitle1 text-white text-weight-bold">Telegram </span>
            </q-item-section>
          </q-item>
          <br>
          <q-item clickable>
            <q-item-section avatar>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
                <circle id="Elipse_9" data-name="Elipse 9" cx="19" cy="19" r="19" fill="#fff" />
              </svg>
            </q-item-section>
            <q-item-section>
              <span class=" text-subtitle1 text-white text-weight-bold">Whatsapp </span>
            </q-item-section>
          </q-item>
        </div>
      </q-card-section>
    </section>
  </div>
</template>
<script>
import { getAllApartament} from '../composables/useApartaments'
import { ref, reactive , onMounted, watch, onUpdated } from 'vue';
export default {
  name: "profile",
  components: {},
  setup() {
    const { datas } = getAllApartament();
    let datePerfil = ref();
    onMounted(() => {
      console.log("promesaa desde perfilll... ", datas);
  });

  onUpdated(() => {
    console.log("veoooooooooooo");
    datePerfil.value = datas
  });

  watch(datas, (newValue, oldValue) => {
    console.log("cambiando desde watcher PERFILLL viejp.... ", oldValue);
    console.log("cambiando desde watcher PERFILLL nuevooo.... ", newValue);
    if(newValue){
      datePerfil.value = newValue;
      console.log("DATA DE PUSH... ", datePerfil.value);
    }
  }, { immediate: true});
    return {
      datas,
      datePerfil
    }
  }
}
</script>
<style>
#avatar {
  bottom: -110px;
}

#menu {
  margin-top: 160px;
  border-top-left-radius: 71px;
  border-top-right-radius: 71px;
  height: 100vh;
}
</style>
