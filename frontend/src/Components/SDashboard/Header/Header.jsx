import React from 'react';
import { useState, useEffect } from 'react';

const Header = ({ toggleSidebar }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        {/* Left side - Hamburger and title */}
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="mr-2 text-gray-500 hover:text-gray-600 focus:outline-none md:hidden"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
        </div>

        {/* Right side - Notifications and profile */}
        <div className="flex items-center space-x-4">
          {/* Time display */}
          <div className="hidden sm:block text-sm font-medium text-gray-500">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none">
            <i className="fas fa-bell"></i>
            <span className="sr-only">Notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile dropdown */}
          <div className="relative">
            <button className="flex items-center space-x-2 focus:outline-none">
              <img 
                className="w-8 h-8 rounded-full border-2 border-blue-500"
                src="https://ui-avatars.com/api/?name=John+Doe&background=random" 
                alt="Profile"
              />
              <span className="hidden md:inline text-sm font-medium text-gray-700">John Doe</span>
              <i className="hidden md:inline fas fa-chevron-down text-xs text-gray-500"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;