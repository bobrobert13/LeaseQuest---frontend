import { ref, reactive, toRefs } from "vue";
import { REGISTRO_USUARIO, LOGIN } from "../graphql/user";
import { apolloClient } from "../config/apollo";
import { redirect } from "./redirect";
import { useGlobalUser } from "../store/pinia.ts";

let dataLogin;
let sessionData = reactive({ token: "", user: {} });
export function registro_usuario(data) {
  const { rout } = redirect();
  const store = useGlobalUser();
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

  const login = async (data) => {
    console.log("recibiendo.. ", data);
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
        sessionData.token = await data.login.token.code;
        sessionData.user = await data.login.token.user;
        console.log("LA SESSION.... ", sessionData.token);
        store.saveSession(sessionData.token, sessionData.user);
        console.log("LA SESSION.... ", store.userState.user.role);
        rout(store.userState.user.role);
      })
      .catch((e) => {
        console.log("ERROR-LOGIN...", e);
      });
    return sessionData.token;
  };

  return {
    login,
    sessionData,
    registro,
    dataLogin,
  };
}
