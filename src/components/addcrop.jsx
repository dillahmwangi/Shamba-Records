import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaLeaf, FaEdit, FaTrash, FaCircle } from "react-icons/fa";

const API_URL = "http://localhost:8000/api/v1/crops/";

const CropManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [crops, setCrops] = useState([]);
  const [newCrop, setNewCrop] = useState({
    id: null,
    name: "",
    crop_type: "",
    quantity: "",
    unit: "",
    planting_date: "",
    expected_harvest_date: "",
    status: "Growing",
    notes: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch crops on load
  useEffect(() => {
    fetchCrops();
  }, []);

  const fetchCrops = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCrops(res.data);
    } catch (error) {
      console.error("Error fetching crops:", error.response?.data || error.message);
    }
  };

  const handleChange = (e) => {
    setNewCrop({ ...newCrop, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      // Check for required fields before saving
      if (!newCrop.name || !newCrop.quantity || !newCrop.unit || !newCrop.planting_date) {
        alert("Please fill in all required fields.");
        return;
      }

      if (isEditing && newCrop.id) {
        // Update crop
        await axios.put(`${API_URL}${newCrop.id}/`, newCrop, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        // Create new crop
        await axios.post(API_URL, newCrop, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      await fetchCrops(); // reload crops
      setShowModal(false); // close modal
      resetForm(); // reset form
    } catch (error) {
      console.error("Error saving crop:", error.response?.data || error.message);
      alert("Failed to save crop. Check console for details.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCrops(crops.filter((crop) => crop.id !== id));
    } catch (error) {
      console.error("Error deleting crop:", error);
    }
  };

  const handleEdit = (crop) => {
    setNewCrop({
      id: crop.id,
      name: crop.name,
      crop_type: crop.crop_type || "",
      quantity: crop.quantity,
      unit: crop.unit,
      planting_date: crop.planting_date,
      expected_harvest_date: crop.expected_harvest_date,
      status: crop.status,
      notes: crop.notes || "",
    });
    setIsEditing(true);
    setShowModal(true);
  };

  const resetForm = () => {
    setNewCrop({
      id: null,
      name: "",
      crop_type: "",
      quantity: "",
      unit: "",
      planting_date: "",
      expected_harvest_date: "",
      status: "Growing",
      notes: "",
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Crop Management</h3>
        <button
          onClick={() => {
            setShowModal(true);
            resetForm();
          }}
          className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          <FaPlus className="mr-2" /> Add New Crop
        </button>
      </div>

      {/* Crop Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {crops.map((crop) => (
          <div
            key={crop.id}
            className="rounded-xl p-5 shadow-sm border border-gray-200 bg-green-50"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500">
                  <FaLeaf className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">{crop.name}</h4>
              </div>
              <FaCircle className="text-gray-400 text-sm" />
            </div>
            <div className="space-y-1 text-sm">
              <p>
                <span className="text-gray-600">Quantity: </span>
                <span className="font-medium">{crop.quantity} {crop.unit}</span>
              </p>
              <p>
                <span className="text-gray-600">Status: </span>
                <span className="font-medium">{crop.status_display}</span>
              </p>
              <p className="text-gray-500 text-xs">
                Planted: {crop.planting_date}
              </p>
            </div>
            <div className="flex space-x-3 mt-4">
              <button
                onClick={() => handleEdit(crop)}
                className="text-blue-600 hover:text-blue-800"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(crop.id)}
                className="text-red-600 hover:text-red-800"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">
              {isEditing ? "Edit Crop" : "Add New Crop"}
            </h3>
            {/* Added an input for crop_type */}
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Crop Name"
                value={newCrop.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="text"
                name="crop_type"
                placeholder="Crop Type"
                value={newCrop.crop_type}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={newCrop.quantity}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="text"
                name="unit"
                placeholder="Unit (kg, bushels, etc.)"
                value={newCrop.unit}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <select
                name="status"
                value={newCrop.status}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              >
                <option value="Growing">Growing</option>
                <option value="Ready">Ready</option>
              </select>
              <input
                type="date"
                name="planting_date"
                value={newCrop.planting_date}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="date"
                name="expected_harvest_date"
                value={newCrop.expected_harvest_date}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
              <textarea
                name="notes"
                placeholder="Notes"
                value={newCrop.notes}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="flex justify-end space-x-3 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              {/* Added onClick handler to the save button */}
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                {isEditing ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropManagement;