import { gql } from '@apollo/client'
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

  useEffect(() => {

    client.query({
      query: get
    })

  }, [])


  return (
    <div className="App">
      <h1>teste</h1>
    </div>
  )
}

export default App
