import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const navItems = [
    { icon: 'fa-tachometer-alt', label: 'Dashboard', path: '/' },
    { icon: 'fa-user', label: 'Profile', path: '/profile' },
    { icon: 'fa-calendar-alt', label: 'Academic Calendar', path: '/calendar' },
    { icon: 'fa-clipboard-check', label: 'Attendance', path: '/attendance' },
    { icon: 'fa-tasks', label: 'Assignments', path: '/assignments' },
    { icon: 'fa-chart-line', label: 'Results', path: '/results' },
    { icon: 'fa-project-diagram', label: 'Project Work', path: '/projects' },
    { icon: 'fa-briefcase', label: 'Internship Log', path: '/internship' },
    { icon: 'fa-book', label: 'Library', path: '/library' },
    { icon: 'fa-envelope', label: 'Letters', path: '/letters' },
  ];

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {mobileSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-75 z-40 transition-opacity"
          onClick={toggleMobileSidebar}
        ></div>
      )}

      {/* Mobile sidebar */}
      <div 
        className={`md:hidden fixed inset-y-0 left-0 z-50 w-72 transform ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full bg-gradient-to-b from-blue-700 to-blue-800 shadow-xl">
          <div className="flex items-center justify-between h-16 px-4 bg-blue-600">
            <div className="flex items-center">
              <i className="fas fa-graduation-cap text-2xl mr-2 text-white"></i>
              <span className="text-xl font-bold text-white">TU Student Portal</span>
            </div>
            <button 
              onClick={toggleMobileSidebar}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto px-4 py-6">
            {/* Profile section */}
            <div className="flex items-center p-3 rounded-lg bg-blue-600 bg-opacity-30 backdrop-blur-sm">
              <img 
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://ui-avatars.com/api/?name=John+Doe&background=random" 
                alt="Profile"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-white">John Doe</p>
                <p className="text-xs text-blue-100">BHM 4th Year</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="mt-6">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) => 
                      `flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200
                      ${isActive ? 'bg-white text-blue-700' : 'text-blue-100 hover:bg-blue-600 hover:bg-opacity-50'}`
                    }
                  >
                    <i className={`fas ${item.icon} mr-3 w-5 text-center`}></i>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </nav>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-blue-600">
            <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-blue-100 hover:text-white rounded-lg hover:bg-blue-600 hover:bg-opacity-30 transition-colors duration-200">
              <i className="fas fa-sign-out-alt mr-3"></i>
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-gradient-to-b from-blue-700 to-blue-800">
          <div className="flex items-center h-16 px-4 bg-blue-600">
            <div className="flex items-center">
              <i className="fas fa-graduation-cap text-2xl mr-2 text-white"></i>
              <span className="text-xl font-bold text-white">TU Student Portal</span>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto px-4 py-6">
            {/* Profile section */}
            <div className="flex items-center p-3 rounded-lg bg-blue-600 bg-opacity-30 backdrop-blur-sm">
              <img 
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://ui-avatars.com/api/?name=John+Doe&background=random" 
                alt="Profile"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-white">John Doe</p>
                <p className="text-xs text-blue-100">BHM 4th Year</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="mt-6">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) => 
                      `flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200
                      ${isActive ? 'bg-white text-blue-700' : 'text-blue-100 hover:bg-blue-600 hover:bg-opacity-50'}`
                    }
                  >
                    <i className={`fas ${item.icon} mr-3 w-5 text-center`}></i>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </nav>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-blue-600">
            <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-blue-100 hover:text-white rounded-lg hover:bg-blue-600 hover:bg-opacity-30 transition-colors duration-200">
              <i className="fas fa-sign-out-alt mr-3"></i>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;