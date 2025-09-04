import React, { useState, useEffect } from "react";
import { FaEdit, FaUserCircle } from "react-icons/fa";
import axios from "axios";

const Index = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    farm_size: "",
    farming_since: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:8000/api/v1/profile/farmer/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put("http://localhost:8000/api/v1/profile/farmer/", profile, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsEditing(false); 
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <p className="text-gray-600 animate-pulse">Loading profile...</p>
      </div>
    );
  }

  const renderField = (label, value, field, type = "text", isTextArea = false) => (
    <div>
      <label className="text-sm font-semibold text-gray-700 mb-1 block">
        {label}
      </label>
      {isEditing ? (
        isTextArea ? (
          <textarea
            value={value}
            onChange={(e) => handleChange(field, e.target.value)}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2 text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => handleChange(field, e.target.value)}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2 text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        )
      ) : (
        <div className="p-3 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
          <p className="text-gray-900">{value || "—"}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 mb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FaUserCircle className="text-green-600" /> Farmer Profile
        </h3>

        {isEditing ? (
          <div className="space-x-3">
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow"
            >
              Save
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow"
          >
            <FaEdit className="mr-2" /> Edit Profile
          </button>
        )}
      </div>

      {/* Profile Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {renderField("First Name", profile.first_name, "first_name")}
        {renderField("Last Name", profile.last_name, "last_name")}
        {renderField("Email", profile.email, "email", "email")}
        {renderField("Phone", profile.phone, "phone", "tel")}
        {renderField("Address", profile.address, "address", "text", true)}
        {renderField("Farm Size", profile.farm_size, "farm_size")}
        {renderField("Farming Since", profile.farming_since, "farming_since")}
      </div>
    </div>
  );
};

export default Index;
