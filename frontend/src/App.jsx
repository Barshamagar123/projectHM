import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Common/Navbar/Navbar'
import Homepage from './Pages/HomePage/Homepage'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Homepage />} />
     
    </Routes>
    </BrowserRouter>
    </>
   
  )
}

export default App
