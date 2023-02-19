import { ref } from "vue";
import { REGISTRO_USUARIO, LOGIN } from "../graphql/user";
import { apolloClient } from "../config/apollo";

export function registro_usuario(data) {
  let sessionData = ref({});
  const registro = (data) => {
    console.log("REGISTRO...", data.email);
    apolloClient
      .mutate({
        mutation: REGISTRO_USUARIO,
        variables: {
          data: {
            email: data.email,
            fullName: data.name,
            password: data.pass,
          },
        },
      })
      .then(({ data }) => {
        console.log("REGISTRO LISTO..", data);
      })
      .catch((e) => {
        console.log("ERROR-REGISTRO-GQL..", e);
      });
  };

  const login = (data) => {
    apolloClient
      .query({
        query: LOGIN,
        variables: {
          data: {
            email: data.email,
            password: data.pass,
          },
        },
      })
      .then(({ data }) => {
        console.log("LOGIN...", data);
        sessionData.value = data;
      })
      .catch((e) => {
        console.log("ERROR-LOGIN...", e);
      });
    return sessionData;
  };

  return {
    registro,
    login,
  };
}
