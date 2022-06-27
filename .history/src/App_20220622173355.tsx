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

 console.log(data)


  return (
    <div className="App">
      <ul>
        {data.lessons.map(lesson => {
          return <
        })}
      </ul>
    </div>
  )
}

export default App
