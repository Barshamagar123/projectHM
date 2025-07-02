import React from 'react';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* College Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Itahari Namuna College</h3>
          <p className="text-gray-400 mb-2">Excellence in Hotel Management</p>
          <div className="flex space-x-3 mt-4">
            <SocialIcon href="#" icon={<FaFacebookF />} color="text-blue-400" />
            <SocialIcon href="#" icon={<FaTwitter />} color="text-blue-400" />
            <SocialIcon href="#" icon={<FaInstagram />} color="text-pink-400" />
            <SocialIcon href="#" icon={<FaLinkedinIn />} color="text-blue-400" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-white mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <FooterLink href="/" text="Home" />
            <FooterLink href="/about" text="About" />
            <FooterLink href="/programs" text="Programs" />
            <FooterLink href="/contact" text="Contact" />
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-white mb-2">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <ContactItem icon={<FaMapMarkerAlt />} text="Itahari, Sunsari, Nepal" />
            <ContactItem icon={<FaPhoneAlt />} text="+977 9801234567" />
            <ContactItem icon={<FaEnvelope />} text="info@incollege.edu.np" />
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-white mb-2">Newsletter</h4>
          <form className="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none" 
            />
            <button 
              type="submit" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded hover:from-blue-700 hover:to-purple-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 text-sm">
        &copy; {new Date().getFullYear()} Itahari Namuna College. All rights reserved.
      </div>
    </footer>
  );
};

// Reusable Footer Components
const SocialIcon = ({ href, icon, color }) => (
  <a href={href} className={`${color} hover:text-white`}>
    {icon}
  </a>
);

const FooterLink = ({ href, text }) => (
  <li>
    <a href={href} className="hover:text-white">{text}</a>
  </li>
);

const ContactItem = ({ icon, text }) => (
  <li className="flex items-center">
    <span className="mr-2">{icon}</span>
    {text}
  </li>
);

export default Footer;