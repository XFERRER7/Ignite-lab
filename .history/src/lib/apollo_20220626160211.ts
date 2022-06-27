import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oe0npq21lo01xi4o5e7kb5/master',
  headers: {
    'Authorization': `Beares ${ process.env.VITE_API_ACESS_TOKEN}`
  },
  cache: new InMemoryCache()
})