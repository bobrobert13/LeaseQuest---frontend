import { ref, onMounted, reactive } from "vue";
import { apolloClient } from "src/config/apollo";
import { GET_RESSORTS } from "../graphql/ressort";

export const useRessort = () => {
  const getAllRessorts = () => {
    return new Promise((resolve, reject) => {
      apolloClient
        .query({
          query: GET_RESSORTS,
          fetchPolicy: "network-only",
        })
        .then(({ data }) => {
          console.log("RESSORTS... ", data.getAllRessorts);
          resolve(data.getAllRessorts);
        })
        .catch((e) => {
          console.log("ERROR-GET-RESSORTS");
          reject(e);
        });
    });
  };

  return {
    getAllRessorts,
  };
};
