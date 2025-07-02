import React from "react";



const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="mb-8 text-lg">
          Join Itahari Namuna College and become a leader in the hospitality industry. 
          Apply now or contact us for more information!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/apply" 
            className="bg-white text-blue-700 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition"
          >
            Apply Now
          </a>
          <a 
            href="/contact" 
            className="bg-white/20 border border-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-white/30 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;