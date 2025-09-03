import React from 'react';
import { FaUser } from 'react-icons/fa'; // Make sure to install react-icons
import { Link } from 'react-router';

const CreateFarmerAccountForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-2xl">
        {/* Header Section */}
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center w-16 h-16 bg-green-500 rounded-full text-white text-3xl mb-4">
            <FaUser />
          </div>
          <h2 className="text-3xl font-semibold text-gray-800">
            Create Farmer Account
          </h2>
          <p className="text-gray-500">Fill in your details to get started</p>
        </div>

        {/* Form Inputs */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="John"
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Smith"
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                className="block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1 (555) 123-4567"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="farm-location" className="block text-sm font-medium text-gray-700">
              Farm Location
            </label>
            <input
              type="text"
              id="farm-location"
              name="farm-location"
              placeholder="City, State"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          
          <div>
            <label htmlFor="farm-size" className="block text-sm font-medium text-gray-700">
              Farm Size (acres)
            </label>
            <select
              id="farm-size"
              name="farm-size"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option>Select farm size</option>
              {/* You can add more options here */}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="••••••••"
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          {/* Checkbox and links */}
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the <a href="#" className="text-green-600 hover:text-green-500">Terms of Service</a> and <a href="#" className="text-green-600 hover:text-green-500">Privacy Policy</a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-3 text-lg font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Create Farmer Account
          </button>
        </form>

        {/* Sign In link */}
        <div className="text-center text-sm text-gray-500">
          Already have an account?{' '}
         <Link to="/auth/login"
        className="font-medium text-green-600 hover:text-green-500">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateFarmerAccountForm;