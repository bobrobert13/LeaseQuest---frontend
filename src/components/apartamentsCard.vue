<template>
<div class=" ">
    <q-scroll-area class=" col-12" style="width: 100vw; height: 40vh;">
        <div v-for="(apt, index) in apartamentos "  :key="apt._id">
            <q-card class=" relative-position z-10 shadow-none col-sm-12 col-xs-12 row py-4 px-4 items-start self-center">
                <div class=" absolute-right -z-10 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="285.58" height="144.533" viewBox="0 0 285.58 144.533">
                        <path id="Trazado_1" data-name="Trazado 1" d="M48.537,183.507c.565.208,115.694-20.568,179.917-77.92,16.2-14.467,27.363-45.953,33.474-60.09,2.614-5.26.73-6.226,6.961-6.057,29.811.81,65.228-.441,65.228-.441l-.143,144.533Z" transform="translate(-48.537 -39)" fill="#09b482" />
                    </svg>

                </div>
                <div class="col-6 relative no-wrap self-center border-none" style=" margin-bottom: 0px;">
                    <div style="color: #80CBB5;" class=" mb-1 text-sm text-weight-bold">
                    {{ apt.name }}
                    </div>
                    <div class=" columns-1 col-12 w-full text-accent">
                        <p class="text-xs font-thin w-36 p-0 m-0 mb-1    ">Suit Marroco Beach, Av
                            Toronto</p>
                        <span class=" text-xs font-medium">
                            <q-icon class=" pl-0" name="place" /> 6.1km de camino</span>
                        <div class=" row col-12 ">
                            <div v-for="(index) in 3" class=" p-0 m-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21.582" height="20.523" viewBox="0 0 21.582 20.523">
                                    <g id="_24_basic_star" data-name="24 / basic / star" transform="translate(0.791 0.513)">
                                        <path id="icon" d="M3.709,18.482v0l1.149-6.686L0,7.059l6.714-.975L9.716,0l3,6.084,6.714.975-4.858,4.736,1.146,6.685-6-3.155L3.711,18.481ZM9.716,3.766,7.82,7.607l-4.239.616,3.067,2.99-.724,4.222,3.791-1.993h0l3.791,1.993-.724-4.222,3.067-2.99-4.239-.616Z" transform="translate(0.284 0.617)" fill="#f7ef0b" stroke="#f7ef0b" stroke-width="1" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" col-5 shadow-xl bottom-2 relative-position ">
                    <q-img class=" relative  col-12 shadow-xl w-32 h-32 object-cover bg-cover" src="../assets/2.jpg" style=" border-radius: 14px;"></q-img>
                </div>
                <q-avatar class=" self-center p-0 m-0" size="24px">
                    <svg id="_24_arrows_circle-arrow-right" data-name="24 / arrows / circle-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path id="icon" d="M3.222,18.778A11,11,0,1,1,18.778,3.222,11,11,0,1,1,3.222,18.778ZM2,11a9,9,0,1,0,9-9A9.01,9.01,0,0,0,2,11Zm8.294,3.293L12.586,12H6V10h6.585L10.293,7.707l1.414-1.414L16.414,11l-4.707,4.707Z" transform="translate(1 1)" fill="#fff" />
                    </svg>

                </q-avatar>
            </q-card>

            <div class=" w-2/5 h-0.5 mt-1 m-auto"></div>
        </div>
    </q-scroll-area>

</div>
</template>

<script>
import { getAllApartament } from '../composables/useApartaments';
import { ref, onMounted } from 'vue';
import { keys } from 'tailwindcss-animistacss/animista__defaults';
export default {
    name: "apartamentsCard",
    setup(props) {
      const apartamentos = ref([]);
      const { getApart, datas  } = getAllApartament();
      onMounted(() => {
        console.log("DATASSSS.... ", datas);

      getApart().then((res)=> {
        apartamentos.value = res;
        console.log("APTTSSSS... ", res);
      }).catch((e) => {
        console.log(e)
      })
    });
        return {
          apartamentos,
        }
    }
}
</script>

<style lang="">

</style>
