import React from 'react';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiClock, FiFacebook, FiTwitter, FiInstagram, FiUser, FiLogIn } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState({
    programs: false,
    about: false,
    admission: false,
    department: false,
    training: false,
    resources: false,
    auth: false
  });
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [authForm, setAuthForm] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(prev => ({
      ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
      [dropdown]: !prev[dropdown]
    }));
  };

  const closeAllDropdowns = () => {
    setOpenDropdown({
      programs: false,
      about: false,
      admission: false,
      department: false,
      training: false,
      resources: false,
      auth: false
    });
  };

  const handleAuthChange = (e) => {
    const { name, value } = e.target;
    setAuthForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted', authForm);
    setShowLoginModal(false);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Register submitted', authForm);
    setShowRegisterModal(false);
  };

  return (
    <header className="font-sans">
   

      {/* Main Navigation Bar */}
      <nav className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <div className="bg-blue-700 text-white rounded-lg p-2 mr-3">
                  <span className="font-bold text-xl">IN</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-800">Itahari Namuna College</span>
                  <span className="block text-xs text-gray-500">Hotel Management</span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-1">
              <Link 
                to="/" 
                className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              {/* Programs Offered Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('programs')}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 flex items-center transition relative group"
                >
                  Programs
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${openDropdown.programs ? 'rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <AnimatePresence>
                  {openDropdown.programs && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-100"
                      onMouseLeave={closeAllDropdowns}
                    >
                      <div className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-100">
                        +2 in Hotel Management
                      </div>
                      <Link to="/plus-two/eligibility" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 pl-6">Eligibility & Duration</Link>
                      <Link to="/plus-two/subjects" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 pl-6">Subjects & Syllabus</Link>
                      <Link to="/plus-two/practical" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 pl-6">Daily Practical Activities</Link>
                      <Link to="/plus-two/career" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 pl-6">Career Path After +2</Link>
                      
                      <div className="px-4 py-2 text-sm font-semibold text-gray-700 border-t border-b border-gray-100">
                        Bachelor of Hotel Management (BHM)
                      </div>
                      <Link to="/bhm/syllabus" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 pl-6">Semester-wise Syllabus</Link>
                      <Link to="/bhm/internship" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 pl-6">Internship & Placement</Link>
                      <Link to="/bhm/specializations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 pl-6">Specializations</Link>
                      <Link to="/bhm/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 pl-6">Program FAQs</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* About Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('about')}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 flex items-center transition relative group"
                >
                  About
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${openDropdown.about ? 'rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <AnimatePresence>
                  {openDropdown.about && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-100"
                      onMouseLeave={closeAllDropdowns}
                    >
                      <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">About Us</Link>
                      <Link to="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">Our Team</Link>
                      <Link to="/vision" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">Chairman's Vision</Link>
                      <Link to="/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">Our History</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Admission Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('admission')}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 flex items-center transition relative group"
                >
                  Admissions
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${openDropdown.admission ? 'rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <AnimatePresence>
                  {openDropdown.admission && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-100"
                      onMouseLeave={closeAllDropdowns}
                    >
                      <Link to="/admission/eligibility" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">Eligibility Criteria</Link>
                      <Link to="/admission/how-to-apply" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">How to Apply</Link>
                      <Link to="/admission/entrance-exam" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">Entrance Exam Details</Link>
                      <Link to="/admission/scholarships" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">Scholarships & Discounts</Link>
                      <Link to="/admission/brochure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">Download Brochure</Link>
                      <Link to="/apply" className="block px-4 py-2 text-sm text-white bg-blue-700 hover:bg-blue-800 mt-1 rounded">Apply Now Form</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Department Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('department')}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 flex items-center transition relative group"
                >
                  Departments
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${openDropdown.department ? 'rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <AnimatePresence>
                  {openDropdown.department && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-100"
                      onMouseLeave={closeAllDropdowns}
                    >
                      <Link to="/front-office" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">Front Office</Link>
                      <Link to="/food-production" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">Food Production</Link>
                      <Link to="/food-beverage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">Food & Beverage</Link>
                      <Link to="/housekeeping" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">House Keeping</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Resources Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('resources')}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 flex items-center transition relative group"
                >
                  Resources
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${openDropdown.resources ? 'rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <AnimatePresence>
                  {openDropdown.resources && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-100"
                      onMouseLeave={closeAllDropdowns}
                    >
                      <Link to="/gallery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">Gallery</Link>
                      <Link to="/events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">Events</Link>
                      <Link to="/faqs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">FAQs</Link>
                      <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">Blog</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Training & Internship Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('training')}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 flex items-center transition relative group"
                >
                  Training
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${openDropdown.training ? 'rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <AnimatePresence>
                  {openDropdown.training && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-100"
                      onMouseLeave={closeAllDropdowns}
                    >
                      <Link to="/domestic-training" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">Domestic Training</Link>
                      <Link to="/international-internship" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">International Internship</Link>
                      <Link to="/placement" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">Placement Partners</Link>
                      <Link to="/career" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">Career Support</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link 
                to="/contact" 
                className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              {/* Auth Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('auth')}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 flex items-center transition relative group"
                >
                  <FiUser className="mr-1" />
                  <span>Account</span>
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${openDropdown.auth ? 'rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <AnimatePresence>
                  {openDropdown.auth && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-100"
                      onMouseLeave={closeAllDropdowns}
                    >
                      <button 
                        onClick={() => setShowLoginModal(true)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                      >
                        Login
                      </button>
                      <button 
                        onClick={() => setShowRegisterModal(true)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                      >
                        Register
                      </button>
                      <div className="border-t border-gray-100 my-1"></div>
                      <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">Dashboard</Link>
                      <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700">Profile</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button 
                type="button" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-blue-50 focus:outline-none transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white shadow-lg overflow-hidden"
            >
              <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                <Link 
                  to="/" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                
                {/* Programs Mobile Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => toggleDropdown('programs')}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 flex justify-between items-center transition"
                  >
                    Programs Offered
                    <svg 
                      className={`h-5 w-5 transition-transform ${openDropdown.programs ? 'rotate-180' : ''}`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`${openDropdown.programs ? 'block' : 'hidden'} pl-4 mt-1 space-y-1`}>
                    <div className="px-3 py-2 text-sm font-semibold text-gray-700">+2 in Hotel Management</div>
                    <Link 
                      to="/plus-two/eligibility" 
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition pl-6"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Eligibility & Duration
                    </Link>
                    <Link 
                      to="/plus-two/subjects" 
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition pl-6"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Subjects & Syllabus
                    </Link>
                    <Link 
                      to="/plus-two/practical" 
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition pl-6"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Daily Practical Activities
                    </Link>
                    <Link 
                      to="/plus-two/career" 
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition pl-6"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Career Path After +2
                    </Link>
                    
                    <div className="px-3 py-2 text-sm font-semibold text-gray-700">Bachelor of Hotel Management</div>
                    <Link 
                      to="/bhm/syllabus" 
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition pl-6"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Semester-wise Syllabus
                    </Link>
                    <Link 
                      to="/bhm/internship" 
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition pl-6"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Internship & Placement
                    </Link>
                    <Link 
                      to="/bhm/specializations" 
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition pl-6"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Specializations
                    </Link>
                  </div>
                </div>
                
                {/* About Mobile Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => toggleDropdown('about')}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 flex justify-between items-center transition"
                  >
                    About
                    <svg 
                      className={`h-5 w-5 transition-transform ${openDropdown.about ? 'rotate-180' : ''}`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`${openDropdown.about ? 'block' : 'hidden'} pl-4 mt-1 space-y-1`}>
                    <Link 
                      to="/about" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link 
                      to="/team" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Our Team
                    </Link>
                    <Link 
                      to="/vision" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Chairman's Vision
                    </Link>
                  </div>
                </div>
                
                {/* Admission Mobile Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => toggleDropdown('admission')}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 flex justify-between items-center transition"
                  >
                    Admissions
                    <svg 
                      className={`h-5 w-5 transition-transform ${openDropdown.admission ? 'rotate-180' : ''}`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`${openDropdown.admission ? 'block' : 'hidden'} pl-4 mt-1 space-y-1`}>
                    <Link 
                      to="/admission/eligibility" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Eligibility Criteria
                    </Link>
                    <Link 
                      to="/admission/how-to-apply" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      How to Apply
                    </Link>
                    <Link 
                      to="/admission/entrance-exam" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Entrance Exam Details
                    </Link>
                    <Link 
                      to="/admission/scholarships" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Scholarships & Discounts
                    </Link>
                    <Link 
                      to="/apply" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-700 hover:bg-blue-800 text-center transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
                
                {/* Department Mobile Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => toggleDropdown('department')}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 flex justify-between items-center transition"
                  >
                    Departments
                    <svg 
                      className={`h-5 w-5 transition-transform ${openDropdown.department ? 'rotate-180' : ''}`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`${openDropdown.department ? 'block' : 'hidden'} pl-4 mt-1 space-y-1`}>
                    <Link 
                      to="/front-office" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Front Office
                    </Link>
                    <Link 
                      to="/food-production" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Food Production
                    </Link>
                    <Link 
                      to="/food-beverage" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Food & Beverage
                    </Link>
                  </div>
                </div>
                
                {/* Resources Mobile Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => toggleDropdown('resources')}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 flex justify-between items-center transition"
                  >
                    Resources
                    <svg 
                      className={`h-5 w-5 transition-transform ${openDropdown.resources ? 'rotate-180' : ''}`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`${openDropdown.resources ? 'block' : 'hidden'} pl-4 mt-1 space-y-1`}>
                    <Link 
                      to="/gallery" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Gallery
                    </Link>
                    <Link 
                      to="/events" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Events
                    </Link>
                    <Link 
                      to="/faqs" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      FAQs
                    </Link>
                  </div>
                </div>
                
                {/* Training Mobile Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => toggleDropdown('training')}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 flex justify-between items-center transition"
                  >
                    Training
                    <svg 
                      className={`h-5 w-5 transition-transform ${openDropdown.training ? 'rotate-180' : ''}`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`${openDropdown.training ? 'block' : 'hidden'} pl-4 mt-1 space-y-1`}>
                    <Link 
                      to="/domestic-training" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Domestic Training
                    </Link>
                    <Link 
                      to="/international-internship" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      International Internship
                    </Link>
                    <Link 
                      to="/placement" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Placement Partners
                    </Link>
                  </div>
                </div>
                
                <Link 
                  to="/Contact" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                
                {/* Auth Links for Mobile */}
                <div className="pt-2 border-t border-gray-200">
                  <button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setShowLoginModal(true);
                    }}
                    className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setShowRegisterModal(true);
                    }}
                    className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition"
                  >
                    Register
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar; 