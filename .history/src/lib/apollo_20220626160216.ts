import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oe0npq21lo01xi4o5e7kb5/master',
  headers: {
    'Authorization': `Beares eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYyNjI4MTcsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNG9lMG5wcTIxbG8wMXhpNG81ZTdrYjUvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYWFhZjFmMDktNzgwMy00NjJlLWI4ZjYtZmEzM2I0MmViMTRkIiwianRpIjoiY2w0dms0OG9zMW5oeTAxdDdnMzJ1N29ibyJ9.vr-fc3xD9fm6CQ-Q1U00N6DVudcw27MEYKrRSBdUDaOKPny3DYIdY6ntWyqHtIZbWp8wzrUP_1_nHLGzpFU-ExbSt597qyRNGWqLE9be4y5q5gHHQUkd8OiJfKueGrGHtj8B2Eqb__SazkW1_T6RC0-N3ZUBGyIlKPbUVEpKK4Zt_8xsOWaysi_O1lOPD_ewcPVWjGGbVm5GJL9ZlbDMrKEkVqqrm5psAkzwXAnVlYqaUeG23xRGBanp17ttulUKbteVj12g9GT6kwctWEpziofqMZiz__8xmMHA110uIx8racgIC2we7FV_Vu0Vaf-YbG91EDQ4_qPotAF38LwCGdemf4FEyrseictOqovMs20UEvNpZjJ66nU433gJCYgwC61k040dzGXXEGkU0Vi96iDmOZmKcUTbQktCet2kjAePMChD7SVK034FYg58r-zaMyWLvb3uqWuaP-YgVKVWeVpc9tLaq5rR1kofUvv5YEGMo1ziJ05kOYPjDU85ep_CF_HeWlEwdZMliHhVuqFYGUCGWFuIjXZSNDyRVRZD2CZ0h_kCAgIvZ590BNREkdhs2Jq3OpxabYCY81cTr8o-Jx_M3tL0H7dA0AS_-Rn3Fo8wdmbBRCjbErfKUfVWm2HpPBv33sqKUfuQxSWGp6t5RjUgoewpqfFQSpc1HUb5jmo`
  },
  cache: new InMemoryCache()
})