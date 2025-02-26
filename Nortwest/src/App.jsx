import React from 'react'
import Home from './components/Home'
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Courses from './components/Courses'

export default function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/courses' element={<Courses/>} ></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}
