import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import { config } from "./index";
import { useGlobalUser } from "../store/pinia.ts";
const store = useGlobalUser();
//YA ENVIO HEADERS, CONEXION CORRECTA Y CONFIGURACION BASICA. lISTO PARA BASE.

// HTTP conexion simple a la API
const httpLink = createHttpLink({
  // aca la url de conexion
  uri: config.urlDev,
});

let token = store.userState.token;
const middleWareLink = new ApolloLink((operation, forward) => {
  operation.setContext((context) => ({
    ...context,
    headers: {
      ...context.headers,
      authorization: token || "",
    },
  }));
  return forward(operation);
});

// implementacion de cache :3
const cache = new InMemoryCache({ addTypename: false });

// creo el servidor de apollo con el httpLink y cache :)
export const apolloClient = new ApolloClient({
  link: ApolloLink.from([middleWareLink, httpLink]),
  cache,
});
