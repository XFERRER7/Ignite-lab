import React from 'react'
import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'
import { Video } from '../components/Video'

export const Event = () => {

  const params = use

  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <main className='flex flex-1'>
      <Video/>
      <SideBar/>
      </main>
    </div>
    
    </>
  )
}
