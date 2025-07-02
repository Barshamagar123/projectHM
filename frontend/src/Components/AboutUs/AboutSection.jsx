import React from "react";

import INC from "../../assets/INC.jpg"


const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-6">About Our College</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Itahari Namuna College is a premier institution dedicated to providing world-class education in Hotel Management.
          </p>
          
          {/* Stylish Checklist */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-700 rounded-lg flex items-center justify-center shadow-md mt-0.5">
                <svg className="w-3 h-3 text-white font-bold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700 font-medium">Experienced and passionate faculty</p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center shadow-md mt-0.5">
                <svg className="w-3 h-3 text-white font-bold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700 font-medium">Modern infrastructure and training labs</p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-700 rounded-lg flex items-center justify-center shadow-md mt-0.5">
                <svg className="w-3 h-3 text-white font-bold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700 font-medium">Strong industry partnerships</p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center shadow-md mt-0.5">
                <svg className="w-3 h-3 text-white font-bold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700 font-medium">Focus on holistic student development</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <img src={INC} 
               alt="College Building" 
               className="rounded-xl shadow-lg w-full max-w-md hover:shadow-xl transition-shadow duration-300" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;