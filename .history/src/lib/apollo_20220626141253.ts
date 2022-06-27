import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    'Authorization': `beares`import.meta.env.VITE_API_ACESS_TOKEN
  },
  cache: new InMemoryCache()
})