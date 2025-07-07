import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Adashboard/Layout/Sidebar'
import Header from '../../Components/Adashboard/Header/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Utils/useAuth'

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true)
  const { token, logout } = useAuth()
  const navigate = useNavigate()
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  useEffect(() => {
    fetch('/api/user/admin', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          logout()
          navigate('/login')
        } else {
          setLoading(false)
        }
      })
      .catch(() => {
        logout()
        navigate('/login')
      })
  }, [token, logout, navigate])

  const toggleSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen)
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#F4F6F8]">
      <Sidebar mobileSidebarOpen={mobileSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <Outlet />
      </div>
    </div>
  )
}

export default AdminDashboard
