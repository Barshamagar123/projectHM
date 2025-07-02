import React from 'react';

import { FaConciergeBell, FaUtensils, FaGlassCheers, FaBroom } from 'react-icons/fa';

const DepartmentsSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="departments">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Departments</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <DepartmentCard 
            icon={<FaConciergeBell className="text-4xl text-blue-600 mb-3" />}
            title="Front Office"
            description="Professional guest services and reception management."
          />
          <DepartmentCard 
            icon={<FaUtensils className="text-4xl text-purple-600 mb-3" />}
            title="Food Production"
            description="Culinary arts and kitchen operations training."
          />
          <DepartmentCard 
            icon={<FaGlassCheers className="text-4xl text-blue-600 mb-3" />}
            title="Food & Beverage"
            description="Service excellence in food and beverage management."
          />
          <DepartmentCard 
            icon={<FaBroom className="text-4xl text-purple-600 mb-3" />}
            title="House Keeping"
            description="Maintaining hygiene and guest comfort standards."
          />
        </div>
      </div>
    </section>
  );
};

const DepartmentCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-lg transition">
    {icon}
    <h4 className="font-bold text-lg mb-1">{title}</h4>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default DepartmentsSection;