import { CheckCircle } from 'phosphor-react'
import React from 'react'

interface LessonProps {
  title: string,
  slug: string,
  avaliableAt: Date,
  type: ''
}


export const Lesson = () => {
  return (
    <a href='#' className='flex flex-col gap-2'>

      <span className='text-gray-300'>
        Domingo • 20 de junho • 19h00
      </span>

      <div className='border border-gray-500 p-4'>
        <header className='flex items-center justify-between'>
          <span className='text-sm text-blue-500 font-medium flex items-center gap-2'>
          <CheckCircle size={20}/>
            Conteúdo liberado
          </span>

          <span className='text-xs rounded border text-white border-green-300 font-bold px-[2px] py-[0.125rem]'>
            AO VIVO
          </span>

        </header>

        <span className='block mt-5 text-gray-200'>
          Abertura do evento Ignite labs
        </span>

      </div>
    </a>
  )
}
