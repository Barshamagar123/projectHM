import React from "react";
const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-500 rounded-full hover:bg-gray-100">
            <i className="fas fa-bell"></i>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center space-x-2">
            <img 
              className="w-8 h-8 rounded-full border-2 border-[#D4AF37]"
              src="https://ui-avatars.com/api/?name=Admin&background=003366&color=fff" 
              alt="Admin"
            />
            <span className="hidden md:inline text-sm font-medium text-gray-700">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;