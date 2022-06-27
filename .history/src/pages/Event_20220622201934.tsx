import React from 'react'
import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'
import { Video } from '../components/Video'

export const Event = () => {
  return (
    <>
    <div className='flex flex-col '>
      <Header/>
      <main className='flex flex-1'>
      <Video/>
      <SideBar/>
      </main>
    </div>
    
    </>
  )
}
