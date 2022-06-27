import React from 'react'

export const Lesson = () => {
  return (
    <a href='#' className='flex flex-col gap-2'>

      <span className='text-gray-300'>
        Domingo • 20 de junho • 19h00
      </span>

      <div className='border border-gray-500 p-4'>
        <header className='flex items-center justify-between'>
          <span className='text-sm text-blue-500 font-medium'>
            Conteúdo liberado
          </span>

          <span className='text-xs rounded border text-white border-green-300 font-bold p-[2'>
            AO VIVO
          </span>

        </header>

        <span>
          Abertura do evento Ignite labs
        </span>

      </div>
    </a>
  )
}
