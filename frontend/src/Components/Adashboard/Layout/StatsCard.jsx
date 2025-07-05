import React from 'react';

const StatsCard = ({ icon, color, title, value, change }) => {
  const colorClasses = {
    blue: 'bg-[#003366] text-white',
    gold: 'bg-[#D4AF37] text-[#003366]',
    teal: 'bg-[#5B8C9D] text-white',
    gray: 'bg-gray-200 text-gray-800'
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div className={`p-3 rounded-full ${colorClasses[color]}`}>
          <i className={`fas ${icon}`}></i>
        </div>
        {change && (
          <span className={`text-xs px-2 py-1 rounded-full 
            ${change.startsWith('+') ? 'bg-green-100 text-green-800' : 
              change.startsWith('-') ? 'bg-red-100 text-red-800' : 
              'bg-gray-100 text-gray-800'}`}>
            {change}
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;