import { gql } from '@apollo/client'
import { useEffect, useState } from 'react'


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

    quer

  }, [])


  return (
    <div className="App">
      <h1>teste</h1>
    </div>
  )
}

export default App
