
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-40 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 text-center text-white max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Welcome to Itahari Namuna College</h1>
        <p className="text-lg md:text-2xl font-medium mb-8 drop-shadow">Excellence in Hotel Management Education</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/apply" className="bg-gradient-to-r from-amber-400 to-amber-600 text-blue-900 font-bold px-8 py-3 rounded-lg shadow-lg hover:from-amber-500 hover:to-amber-700 transition">Apply Now</a>
          <a href="#programs" className="bg-white/80 text-blue-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-white transition">Explore Programs</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;