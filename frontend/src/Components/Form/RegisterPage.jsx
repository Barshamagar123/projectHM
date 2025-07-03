import React from 'react';
import { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    birth: '',
    gender: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    confirmpassword: '',
    education: '',
    program: '',
    terms: false
  });

  const [errors, setErrors] = useState({
    message: '',
    hasError: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    if (formData.password !== formData.confirmpassword) {
      setErrors({
        message: 'Passwords do not match',
        hasError: true
      });
      return;
    }
    // Submit logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar would be imported here */}
      {/* <Navbar /> */}
      
      <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <svg className="h-12 w-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Hotel Management Program
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Itahari Namuna College
          </p>
          <h3 className="mt-4 text-center text-xl font-semibold text-blue-600">
            Enrollment Form
          </h3>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow-lg sm:rounded-xl sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Error message */}
              {errors.hasError && (
                <div className="rounded-md bg-red-50 p-4" id="error-message">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800" id="error-text">{errors.message}</h3>
                    </div>
                  </div>
                </div>
              )}

              {/* Personal Information */}
              <div className="form-section mb-6 pb-6 border-b border-gray-200">
                <h4 className="form-section-title text-lg font-semibold text-blue-800 mb-4">
                  Personal Information
                </h4>
                <div>
                  <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="fullname"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input-hover appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm transition duration-200 ease-in-out hover:border-blue-300 focus:border-blue-500 focus:ring-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                      Date of Birth
                    </label>
                    <div className="mt-1">
                      <input
                        id="dob"
                        name="birth"
                        type="date"
                        required
                        value={formData.birth}
                        onChange={handleChange}
                        className="input-hover appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm transition duration-200 ease-in-out hover:border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                      Gender
                    </label>
                    <div className="mt-1">
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="input-hover appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm transition duration-200 ease-in-out hover:border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="address"
                      name="address"
                      rows="2"
                      value={formData.address}
                      onChange={handleChange}
                      className="input-hover appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm transition duration-200 ease-in-out hover:border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="form-section mb-6 pb-6 border-b border-gray-200">
                <h4 className="form-section-title text-lg font-semibold text-blue-800 mb-4">
                  Contact Information
                </h4>
                <div className="mt-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-hover appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm transition duration-200 ease-in-out hover:border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Account Information */}
              <div className="form-section mb-6 pb-6 border-b border-gray-200">
                <h4 className="form-section-title text-lg font-semibold text-blue-800 mb-4">
                  Account Information
                </h4>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input-hover appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm transition duration-200 ease-in-out hover:border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="input-hover appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm transition duration-200 ease-in-out hover:border-blue-300 focus:border-blue-500 focus:ring-1"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="confirm_password"
                      name="confirmpassword"
                      type="password"
                      autoComplete="new-password"
                      required
                      value={formData.confirmpassword}
                      onChange={handleChange}
                      className="input-hover appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm transition duration-200 ease-in-out hover:border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div className="form-section mb-6 pb-6 border-b border-gray-200">
                <h4 className="form-section-title text-lg font-semibold text-blue-800 mb-4">
                  Academic Information
                </h4>
                <div>
                  <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                    Highest Education
                  </label>
                  <div className="mt-1">
                    <select
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className="input-hover appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 sm:text-sm transition duration-200 ease-in-out hover:border-blue-300 focus:ring-1"
                    >
                      <option value="">Select</option>
                      <option value="slc">SLC/SEE</option>
                      <option value="plus2">+2</option>
                      <option value="bachelor">Bachelor</option>
                      <option value="master">Master</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                    Program Selection
                  </label>
                  <div className="mt-1">
                    <select
                      id="course"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="input-hover appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm transition duration-200 ease-in-out hover:border-blue-300 focus:border-blue-500 focus:ring-1"
                    >
                      <option value="">Select a program</option>
                      <option value="diploma">Diploma in Hotel Management</option>
                      <option value="bhm">Bachelor in Hotel Management (BHM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Terms and Conditions</a>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                >
                  Submit Application
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Need help? <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Contact our admissions office</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;