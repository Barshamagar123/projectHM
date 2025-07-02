import React from 'react';

import { FaUserTie, FaGlobeAsia, FaBuilding } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white" id="features">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<FaUserTie className="text-3xl text-blue-600 mb-3 mx-auto" />}
            title="Expert Faculty"
            description="Learn from industry professionals and experienced educators."
            bgClass="from-blue-100 to-blue-200"
          />
          <FeatureCard 
            icon={<FaGlobeAsia className="text-3xl text-purple-600 mb-3 mx-auto" />}
            title="Global Exposure"
            description="International internships and placement opportunities."
            bgClass="from-purple-100 to-purple-200"
          />
          <FeatureCard 
            icon={<FaBuilding className="text-3xl text-amber-500 mb-3 mx-auto" />}
            title="Modern Facilities"
            description="State-of-the-art labs, kitchens, and learning spaces."
            bgClass="from-amber-100 to-amber-200"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, bgClass }) => (
  <div className={`bg-gradient-to-br ${bgClass} rounded-xl shadow p-8 text-center`}>
    {icon}
    <h4 className="font-bold text-lg mb-2">{title}</h4>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default FeaturesSection;