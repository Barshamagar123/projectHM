import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Common/Navbar/Navbar'
import Homepage from './Pages/HomePage/Homepage'
import StudentDashboard from './Pages/StudentDashboardpage/StudentDashboard'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Homepage />} />
      <Route path="/studentdashboard" element={<StudentDashboard />} />     
    </Routes>
    </BrowserRouter>
    </>
   
  )
}

export default App
