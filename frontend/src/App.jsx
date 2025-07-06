import React from 'react'


import Navbar from './Components/Common/Navbar/Navbar'
import Homepage from './Pages/HomePage/Homepage'
import StudentDashboard from './Pages/StudentDashboardpage/StudentDashboard'

import AdminDashboard from './Pages/AdminDashboard/AdminDashboard'
import Notices from './Components/Adashboard/Layout/Notices'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Gallery from './Components/Adashboard/Layout/Gallery'
import NoticeForm from './Components/Adashboard/Layout/NoticeForm'
import Dashboard from './Components/Adashboard/Dashboard/Dashboard'
import {Toaster} from 'react-hot-toast';
import Register from './Components/Form/Register'


const App = () => {
  
 
  const router = createBrowserRouter ([
    <Toaster />,
    {
      path:"/",
      element:<Homepage />,
    },
    {
      path:"/student",
      element:<StudentDashboard />
    },
    {
      path:"/register",
      element:<Register />
    },
    {
      path:"/admin",
      element:<AdminDashboard />,
      children:[
        {
          path:"/admin/dashboard",
          element:<Dashboard />

        },
        {
          path:"/admin/notices",
          element:<Notices />
        },
        {
          path:"/admin/gallery",
          element:<Gallery  />
        },
        {
          path:"/admin/formnotices",
          element:<NoticeForm   />
        }
       
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
   
    </>
   
  )
}

export default App
