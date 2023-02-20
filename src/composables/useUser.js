import { ref, toRefs } from "vue";
import { REGISTRO_USUARIO, LOGIN } from "../graphql/user";
import { apolloClient } from "../config/apollo";

let dataLogin;
export function registro_usuario(data) {
  let sessionData = ref({ token: null, user: null });
  const registro = async (data) => {
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
      .then(async ({ data }) => {
        dataLogin = data.login.token;
      })
      .catch((e) => {
        console.log("ERROR-LOGIN...", e);
      });
    return dataLogin;
  };

  return {
    sessionData: toRefs(sessionData),
    registro,
    login,
    dataLogin,
  };
}
