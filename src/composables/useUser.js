import { ref } from "vue";
import { REGISTRO_USUARIO } from "../graphql/user";
import { apolloClient } from "../config/apollo";

export function registro_usuario(data) {
  const registro = () => {
    apolloClient
      .mutate({
        mutation: REGISTRO_USUARIO,
        fetchPolicy: "network-only",
        variables: {
          data: data,
        },
      })
      .then(({ data }) => {
        console.log("REGISTRO LISTO..", data);
      })
      .catch((e) => {
        console.log("ERROR-REGISTRO-GQL..", e);
      });
  };
  return {
    registro,
  };
}
