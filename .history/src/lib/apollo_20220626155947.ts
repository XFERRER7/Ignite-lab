import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.VITE_API_URL,
  headers: {
    'Authorization': `Beares ${import.meta.env.VITE_API_ACESS_TOKEN}`
  },
  cache: new InMemoryCache()
})