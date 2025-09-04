// src/components/FarmerTable.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

// API Configuration
const API_BASE_URL = "http://localhost:8000/api/v1";

// Axios instance without token restriction
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export default function FarmerTable() {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingFarmer, setEditingFarmer] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
    address: "",
    farm_name: "",
    farm_size: "",
    location: "",
  });

  // Fetch all farmers
  const fetchFarmers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.get('/farmers/');
      setFarmers(response.data);
    } catch (err) {
      console.error('Error fetching farmers:', err);
      setError("Could not fetch farmers. Table still visible.");
      setFarmers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFarmers();
  }, []);

  // Form handlers
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const resetForm = () => {
    setForm({
      username: "",
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      phone: "",
      address: "",
      farm_name: "",
      farm_size: "",
      location: "",
    });
    setEditingFarmer(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const data = { ...form, farm_size: form.farm_size ? parseFloat(form.farm_size) : null };
      if (editingFarmer) {
        await api.put(`/farmers/${editingFarmer.id}/`, data);
        alert("Farmer updated successfully!");
      } else {
        await api.post("/farmers/", data);
        alert("Farmer created successfully!");
      }
      setShowForm(false);
      resetForm();
      fetchFarmers();
    } catch (err) {
      console.error(err);
      alert("Error saving farmer.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleAdd = () => {
    resetForm();
    setShowForm(true);
  };

  const handleEdit = (farmer) => {
    setForm({
      username: farmer.username || "",
      email: farmer.email || "",
      password: "",
      first_name: farmer.first_name || "",
      last_name: farmer.last_name || "",
      phone: farmer.phone || "",
      address: farmer.address || "",
      farm_name: farmer.farm_name || "",
      farm_size: farmer.farm_size || "",
      location: farmer.location || "",
    });
    setEditingFarmer(farmer);
    setShowForm(true);
  };

  const handleDelete = async (farmer) => {
    if (window.confirm(`Delete farmer "${farmer.username}"?`)) {
      try {
        await api.delete(`/farmers/${farmer.id}/`);
        fetchFarmers();
        alert("Farmer deleted successfully!");
      } catch (err) {
        console.error(err);
        alert("Error deleting farmer.");
      }
    }
  };

  if (loading) return <div>Loading farmers...</div>;

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Farmers Management</h2>
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          disabled={submitting}
        >
          + Add Farmer
        </button>
      </div>

      <table className="min-w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3 border text-left">Name</th>
            <th className="p-3 border text-left">Email</th>
            <th className="p-3 border text-left">Phone</th>
            <th className="p-3 border text-left">Farm Name</th>
            <th className="p-3 border text-left">Farm Size</th>
            <th className="p-3 border text-left">Location</th>
            <th className="p-3 border text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {farmers.length > 0 ? (
            farmers.map((farmer) => (
              <tr key={farmer.id} className="hover:bg-gray-50">
                <td className="p-3 border">{farmer.username}</td>
                <td className="p-3 border">{farmer.email}</td>
                <td className="p-3 border">{farmer.phone}</td>
                <td className="p-3 border">{farmer.farm_name}</td>
                <td className="p-3 border">{farmer.farm_size}</td>
                <td className="p-3 border">{farmer.location}</td>
                <td className="p-3 border text-center flex justify-center gap-2">
                  <button onClick={() => handleEdit(farmer)} className="text-yellow-600 hover:text-yellow-800">Edit</button>
                  <button onClick={() => handleDelete(farmer)} className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="p-8 text-center text-gray-500">
                No farmers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Add/Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">
              {editingFarmer ? "Edit Farmer" : "Add New Farmer"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                name="email"
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                name="first_name"
                placeholder="First Name"
                value={form.first_name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                name="last_name"
                placeholder="Last Name"
                value={form.last_name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                name="farm_name"
                placeholder="Farm Name"
                value={form.farm_name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                name="farm_size"
                placeholder="Farm Size"
                type="number"
                value={form.farm_size}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                name="location"
                placeholder="Location"
                value={form.location}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => { setShowForm(false); resetForm(); }}
                  className="px-4 py-2 border rounded"
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded"
                  disabled={submitting}
                >
                  {editingFarmer ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
