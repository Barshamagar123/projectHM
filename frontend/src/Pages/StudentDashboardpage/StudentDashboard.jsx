import React, { useState } from 'react'
import Header from '../../Components/SDashboard/Header/Header'
import Sidebar from '../../Components/SDashboard/Layout/Sidebar'
import Dashboard from '../../Components/SDashboard/Dashboard/Dashboard';


const StudentDashboard = () => {
     const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };
  return (
   <>
    
      <div className="flex h-screen overflow-hidden bg-gray-50">
        <Sidebar mobileSidebarOpen={mobileSidebarOpen} toggleMobileSidebar={toggleSidebar} />
        
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header toggleSidebar={toggleSidebar} />
          <Dashboard />
         
        </div>
      </div>
   
  

   </>
  )
}

export default StudentDashboard
