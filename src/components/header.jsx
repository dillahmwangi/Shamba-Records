import React, { useState, useEffect } from "react";
import { FaUsers, FaSeedling } from "react-icons/fa";
import profile from "../assets/profile.jpg";

import axios from "axios";
import { useAuth } from "../features/auth/AuthContext";

const Header = () => {
  const { user, token } = useAuth
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        let endpoint = "";
        
        // Determine which endpoint to call based on user role
        if (user?.role === "admin") {
          endpoint = "/api/v1/dashboard/admin/";
        } else if (user?.role === "farmer") {
          endpoint = "/api/v1/dashboard/farmer/";
        } else {
          setError("Unknown user role");
          return;
        }

        const response = await axios.get(endpoint, {
          headers: {
            "Authorization": `Token ${token}`,
          },
        });

        setDashboardData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        console.error("Error fetching dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user && token) {
      fetchDashboardData();
    }
  }, [user, token]);

  // Get current date for display
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const summaryData = [
    {
      title: user?.role === "admin" ? 'Total Farmers' : 'Total Crops',
      value: loading ? '...' : 
        user?.role === "admin" 
          ? (dashboardData?.total_farmers || '0') 
          : (dashboardData?.total_crops || '0'),
      change: '+12%', // This would need to be calculated from historical data
      period: 'vs last month',
      icon: user?.role === "admin" 
        ? <FaUsers className="w-8 h-8 text-green-600 p-2 bg-green-100 rounded-lg" />
        : <FaSeedling className="w-8 h-8 text-green-600 p-2 bg-green-100 rounded-lg" />,
    },
  ];

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded-lg">
        Error loading dashboard: {error}
      </div>
    );
  }

  return (
    <div className="flex gap-6 mb-6">
      {/* Header Section - 3/4 */}
      <div className="w-3/4 bg-[#00BF40FF] text-white p-6 rounded-2xl shadow-md flex justify-between items-center">
        {/* Left Section: Profile Image First */}
        <div className="flex-shrink-0 mr-6">
          <img
            src={profile}
            className="w-24 h-24 rounded-full object-cover border-2 border-[#00BF40FF] shadow-sm"
            alt="Profile"
          />
        </div>

        {/* Right Section: Welcome & Weather */}
        <div className="flex flex-col flex-grow space-y-2">
          <div className="text-left">
            <h1 className="text-4xl font-bold mb-1">
              Welcome back, {user?.first_name || user?.username}!
            </h1>
            <p className="text-lg opacity-90">
              Here's what's happening with your {user?.role === "admin" ? "platform" : "farm"} today
            </p>
          </div>

          <div className="flex items-center text-sm opacity-80 mt-2">
            {/* Calendar Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a3 3 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="mr-6">Today: {currentDate}</span>

            {/* Cloud Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 15a4 4 0 004 4h9a5 5 0 00-5-5V7a3 3 0 00-3-3H5a3 3 0 00-3 3v11z"
              />
            </svg>
            <span>Partly Cloudy, 22°C</span>
          </div>
        </div>
      </div>

      {/* Summary Card - 1/4 */}
      <div className="w-1/4">
        <div className="bg-white p-8 rounded-2xl shadow-md flex items-center justify-between border-r-4 border-[#00BF40FF]">
          <div>
            <p className="text-gray-500 text-sm font-medium">
              {summaryData[0].title}
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mt-1">
              {summaryData[0].value}
            </h2>
            <p
              className={`text-sm mt-1 ${
                summaryData[0].change.startsWith("+")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {summaryData[0].change}{" "}
              <span className="text-gray-500">{summaryData[0].period}</span>
            </p>
          </div>
          {summaryData[0].icon}
        </div>
      </div>
    </div>
  );
};

export default Header;