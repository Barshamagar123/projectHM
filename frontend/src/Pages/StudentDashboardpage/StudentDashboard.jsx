import React, { useEffect, useState } from 'react'
import Header from '../../Components/SDashboard/Header/Header'
import Sidebar from '../../Components/SDashboard/Layout/Sidebar'
import Dashboard from '../../Components/SDashboard/Dashboard/Dashboard';
import { useAuth } from '../../Utils/useAuth';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const [loading, setLoading] = useState(true);
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    fetch('/api/user/student', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          logout();
          navigate('/login');
        } else {
          setLoading(false);
        }
      })
      .catch(() => {
        logout();
        navigate('/login');
      });
  }, [token, logout, navigate]);

  const toggleSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar mobileSidebarOpen={mobileSidebarOpen} toggleMobileSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <Dashboard />
      </div>
    </div>
  )
}

export default StudentDashboard
