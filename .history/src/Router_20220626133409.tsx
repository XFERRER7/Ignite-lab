import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Event } from './pages/Event'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={sub}/>
      <Route path='/event' element={<Event/>}/>
      <Route path='/event/lesson/:slug' element={<Event/>}/>
    </Routes>
  )
}
