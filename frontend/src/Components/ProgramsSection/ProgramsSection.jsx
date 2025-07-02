import React from "react";


const ProgramsSection = () => {
  return (
    <section className="py-16 bg-white" id="programs">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Our Programs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl shadow-lg p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">+2 in Hotel Management</h3>
              <p className="mb-4">A comprehensive higher secondary program designed to introduce students to the fundamentals.</p>
            </div>
            <a href="/plus-two/eligibility" className="mt-4 inline-block bg-white text-blue-700 font-semibold px-6 py-2 rounded shadow hover:bg-blue-50 transition">Learn More</a>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-xl shadow-lg p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Bachelor of Hotel Management</h3>
              <p className="mb-4">An undergraduate degree program that equips students with advanced knowledge.</p>
            </div>
            <a href="/bhm/syllabus" className="mt-4 inline-block bg-white text-purple-700 font-semibold px-6 py-2 rounded shadow hover:bg-purple-50 transition">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;