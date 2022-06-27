import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { client } from './lib/apollo'


const GET_LESSONS = gql `
  query {
    lessons {
      id
      title
    }
  }
`

function App() {

 const {data} = useQuery(GET_LESSONS);


  return (
    <div className="App">
      <h1>teste</h1>
    </div>
  )
}

export default App
