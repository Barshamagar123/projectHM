import React from 'react'
import Sidebar from '../../Components/Adashboard/Layout/Sidebar'
import Header from '../../Components/Adashboard/Header/Header'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'


const AdminDashboard = () => {
     const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-[#F4F6F8]">
        <Sidebar mobileSidebarOpen={mobileSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header toggleSidebar={toggleSidebar} />
          <Outlet />
          
         
        </div>
      </div>
    </>
  )
}

export default AdminDashboard
