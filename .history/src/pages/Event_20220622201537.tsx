import React from 'react'
import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'
import { Video } from '../components/Video'

export const Event = () => {
  return (
    <>
    <Header/>
    <main className=''>
    <Video/>
    <SideBar/>
    </main>
    
    </>
  )
}
