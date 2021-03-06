import React from 'react'
import { Logo } from '../components/Logo'

export const Subscribe = () => {
  return (
    <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
      
      <div className='max-w-[1100px] flex items-center mt-20 mx-auto'>

        <div className='max-w-[640px]'>
          <Logo/>

          <h1>
          Construa uma aplicação completa, do zero, com React JS
          </h1>
          <p>
          Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

      </div>

      <img src="/src/assets/group.png" alt="" />

    </div>
  )
}
