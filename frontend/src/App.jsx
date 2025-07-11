import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

import Navbar from './Components/Common/Navbar/Navbar'
import Homepage from './Pages/HomePage/Homepage'
import StudentDashboard from './Pages/StudentDashboardpage/StudentDashboard'
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard'
import Notices from './Components/Adashboard/Layout/Notices'
import Gallery from './Components/Adashboard/Layout/Gallery'
import NoticeForm from './Components/Adashboard/Layout/NoticeForm'
import Dashboard from './Components/Adashboard/Dashboard/Dashboard'
import Register from './Components/Form/Register'
import Login from './Components/Form/Login'
import ProtectedRoute from './Components/Common/ProtectedRoute'
import Logout from './Components/Common/Logout'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },
    {
      path: "/student/dashboard",
      element: (
        <ProtectedRoute allowedRoles={['student']}>
          <StudentDashboard />
        </ProtectedRoute>
      )
    },
    {
      path: "/admin/dashboard",
      element: (
        <ProtectedRoute allowedRoles={['admin']}>
          <AdminDashboard />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Dashboard />
        },
        {
          path: "notices",
          element: <Notices />
        },
        {
          path: "gallery",
          element: <Gallery />
        },
        {
          path: "formnotices",
          element: <NoticeForm />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            theme: {
              primary: '#4aed88',
            },
          },
        }}
      />
    </>
  )
}

export default App
