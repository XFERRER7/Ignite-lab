import { gql } from '@apollo/client'
import { useState } from 'react'


const GET_LESSONS = gql `
  query {
    lessons {
      id
      title
    }
  }
`

function App() {

  use


  return (
    <div className="App">
      <h1>teste</h1>
    </div>
  )
}

export default App
