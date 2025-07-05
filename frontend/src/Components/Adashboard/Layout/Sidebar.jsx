import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { icon: 'fa-tachometer-alt', label: 'Dashboard', path: '/admin' },
    { icon: 'fa-bullhorn', label: 'Notices/News/Events', path: '/admin/notices' },
    { icon: 'fa-chalkboard-teacher', label: 'Faculty Members', path: '/admin/faculty' },
    { icon: 'fa-calendar-alt', label: 'Class Schedules', path: '/admin/schedules' },
    { icon: 'fa-images', label: 'Gallery', path: '/admin/gallery' },
    { icon: 'fa-chart-pie', label: 'Analytics', path: '/admin/analytics' },
    { icon: 'fa-file-export', label: 'Export Tools', path: '/admin/exports' }
  ];

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-[#003366] text-white">
        <div className="flex items-center h-16 px-4 bg-[#002244]">
          <i className="fas fa-university text-2xl mr-2 text-[#D4AF37]"></i>
          <span className="text-xl font-bold">Admin Portal</span>
        </div>
        
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200
                  ${isActive ? 'bg-[#D4AF37] text-[#003366]' : 'text-gray-200 hover:bg-[#002244]'}`
                }
              >
                <i className={`fas ${item.icon} mr-3 w-5 text-center`}></i>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;