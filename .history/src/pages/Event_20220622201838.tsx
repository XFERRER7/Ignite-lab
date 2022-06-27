import React from 'react'
import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'
import { Video } from '../components/Video'

export const Event = () => {
  return (
    <>
    <div className=''>
      <Header/>
      <main className='flex'>
      <Video/>
      <SideBar/>
      </main>
    </div>
    
    </>
  )
}
