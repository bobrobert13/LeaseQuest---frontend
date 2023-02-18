import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { config } from "./index";
// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: config.urlDev,
});

// Cache implementation
const cache = new InMemoryCache({ addTypename: false });

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
