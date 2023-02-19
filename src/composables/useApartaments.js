import { ref } from "vue";
import { GET_ALL_APARTAMENTS } from "../graphql/apartament";
import { apolloClient } from "../config/apollo";

export function getAllApartament(id) {
  const getApart = () => {
    apolloClient
      .query({
        query: GET_ALL_APARTAMENTS,
        fetchPolicy: "network-only",
      })
      .then(({ data }) => {
        console.log("DATOS...", data);
      })
      .catch((e) => {
        console.log("error-fecth-data...", e);
      });
  };
  return {
    getApart,
  };
}
