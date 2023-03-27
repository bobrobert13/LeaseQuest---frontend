import { ref, reactive, onMounted, watch } from "vue";
import { GET_ALL_APARTAMENTS } from "../graphql/apartament";
import { apolloClient } from "../config/apollo";

let datas = reactive(["FREDDY"]);
export function getAllApartament(id) {
  onMounted(async () => {
    setTimeout(async () => {
      datas.push(
        await getApart().then((res) => {
          return res;
        })
      );
    }, 5000);

    setTimeout(() => {
      datas.push(["COÑIOOOOO"]);
      console.log("pushedooo.... ", datas);
    }, 10000);
  });
  watch(
    datas,
    (newValue, oldValue) => {
      console.log("cambiando desde watcher viejp.... ", oldValue);
      console.log("cambiando desde watcher nuevooo.... ", newValue);
    },
    { immediate: true }
  );

  const getApart = async () => {
    return new Promise((resolve, reject) => {
      try {
        apolloClient
          .query({
            query: GET_ALL_APARTAMENTS,
            fetchPolicy: "network-only",
          })
          .then(async ({ data }) => {
            datas = await data.allApartaments;
            resolve(datas);
            return datas;
          });
      } catch (error) {
        console.log("HA OCURRIDO UN ERROR... ", error);
        reject(error);
      }
    });
  };

  return {
    getApart,
    datas,
  };
}
