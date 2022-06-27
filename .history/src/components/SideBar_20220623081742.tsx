import { gql } from '@apollo/client'
import React from 'react'
import { Lesson } from './Lesson'


const GET_LESSONS_QUERY = gql`
query MyQuery {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    slug
    title
    availableAt
    lessonType
  }
}

`

export const SideBar = () => {
  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-600 block'>Cronograma de aulas</span>

      <div className='flex flex-col gap-8'>
        <Lesson title='Aula 1' slug='Aula-01' type='Live' avaliableAt={new Date()}/>
        
      </div>
    </aside>
  )
}
