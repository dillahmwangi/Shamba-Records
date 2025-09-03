import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-green-600 text-white p-6 rounded-2xl mb-6 shadow-md">
      {/* Left Section: Welcome Message and Weather Info */}
      <div className="flex flex-col space-y-2">
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-1">Welcome back, Alex!</h1>
          <p className="text-lg opacity-90">Here's what's happening with your farm today</p>
        </div>
        <div className="flex items-center text-sm opacity-80 mt-2">
          {/* Calendar Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="mr-6">Today: December 3, 2024</span>

          {/* Cloud Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 00-5-5V7a3 3 0 00-3-3H5a3 3 0 00-3 3v11z" />
          </svg>
          <span>Partly Cloudy, 22°C</span>
        </div>
      </div>

      {/* Right Section: User Profile Image */}
      <div className="flex-shrink-0 ml-4">
        <img
          src="https://via.placeholder.com/100x100?text=User" // Placeholder, replace with actual user image
          alt="User Profile"
          className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-sm"
        />
      </div>
    </div>
  );
};

export default Header;