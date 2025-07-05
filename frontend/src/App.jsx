import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Common/Navbar/Navbar'
import Homepage from './Pages/HomePage/Homepage'
import StudentDashboard from './Pages/StudentDashboardpage/StudentDashboard'
import RegisterPage from './Components/Form/RegisterPage'
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Homepage />} />
      <Route path="/studentdashboard" element={<StudentDashboard />} /> 
      <Route path='/admin' element={<AdminDashboard />} />
      <Route path='/register'  element={<RegisterPage />} />   
    </Routes>
    </BrowserRouter>
    </>
   
  )
}

export default App
