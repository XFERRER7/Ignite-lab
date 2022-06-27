import { gql, useQuery } from '@apollo/client'
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react'
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
        {data.lessons.map((lesson: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
          return <li>{lesson.title}</li>
        })}
      </ul>
    </div>
  )
}

export default App
