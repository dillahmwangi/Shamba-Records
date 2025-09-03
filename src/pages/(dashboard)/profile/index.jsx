import React, { useState } from "react";
import { FaEdit, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Profile state
  const [profile, setProfile] = useState({
    fullName: "Alex Johnson",
    farmAddress: "123 Green Valley Road\nFarmington, TX 75442\nUnited States",
    email: "alex.johnson@farmcoop.com",
    farmSize: "45 acres",
    phone: "+1 (555) 123-4567",
    since: "2018",
  });

  // Handle input changes
  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
      {/* Header and Edit Button */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          Profile Information
        </h3>

        {isEditing ? (
          <div className="space-x-3">
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Save
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            <FaEdit className="mr-2" /> Edit Profile
          </button>
        )}
      </div>

      {/* Profile Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {/* Full Name */}
        <div>
          <label className="text-sm font-medium text-gray-500 mb-1 block">
            Full Name
          </label>
          <div className="flex items-center p-3 border border-gray-300 rounded-lg bg-gray-50">
            <FaUserCircle className="w-8 h-8 text-gray-400 mr-3" />
            {isEditing ? (
              <input
                type="text"
                value={profile.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                className="flex-1 bg-white border border-gray-300 rounded-md p-2 text-gray-900"
              />
            ) : (
              <p className="text-gray-900 font-normal">{profile.fullName}</p>
            )}
          </div>
        </div>

        {/* Farm Address */}
        <div>
          <label className="text-sm font-medium text-gray-500 mb-1 block">
            Farm Address
          </label>
          <div className="p-3 border border-gray-300 rounded-lg bg-gray-50 h-full flex items-center">
            {isEditing ? (
              <textarea
                value={profile.farmAddress}
                onChange={(e) => handleChange("farmAddress", e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-900"
              />
            ) : (
              <p className="text-gray-900 font-normal whitespace-pre-line">
                {profile.farmAddress}
              </p>
            )}
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label className="text-sm font-medium text-gray-500 mb-1 block">
            Email Address
          </label>
          <div className="p-3 border border-gray-300 rounded-lg bg-gray-50">
            {isEditing ? (
              <input
                type="email"
                value={profile.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-900"
              />
            ) : (
              <p className="text-gray-900 font-normal">{profile.email}</p>
            )}
          </div>
        </div>

        {/* Farm Size */}
        <div>
          <label className="text-sm font-medium text-gray-500 mb-1 block">
            Farm Size
          </label>
          <div className="p-3 border border-gray-300 rounded-lg bg-gray-50">
            {isEditing ? (
              <input
                type="text"
                value={profile.farmSize}
                onChange={(e) => handleChange("farmSize", e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-900"
              />
            ) : (
              <p className="text-gray-900 font-normal">{profile.farmSize}</p>
            )}
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label className="text-sm font-medium text-gray-500 mb-1 block">
            Phone Number
          </label>
          <div className="p-3 border border-gray-300 rounded-lg bg-gray-50">
            {isEditing ? (
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-900"
              />
            ) : (
              <p className="text-gray-900 font-normal">{profile.phone}</p>
            )}
          </div>
        </div>

        {/* Farming Since */}
        <div>
          <label className="text-sm font-medium text-gray-500 mb-1 block">
            Farming Since
          </label>
          <div className="p-3 border border-gray-300 rounded-lg bg-gray-50">
            {isEditing ? (
              <input
                type="text"
                value={profile.since}
                onChange={(e) => handleChange("since", e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-md p-2 text-gray-900"
              />
            ) : (
              <p className="text-gray-900 font-normal">{profile.since}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
