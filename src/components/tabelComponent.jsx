import React from "react";

// Reusable CropTable component
const CropTable = ({ crops, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">All Crops</h2>

        <div className="flex space-x-2">
          {/* Search input */}
          <input
            type="text"
            placeholder="Search crops..."
            className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring focus:ring-green-200"
          />

          {/* Status filter */}
          <select className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring focus:ring-green-200">
            <option>All Status</option>
            <option>Growing</option>
            <option>Ready</option>
            <option>Harvested</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left text-sm font-semibold">
            <th className="p-3">Crop</th>
            <th className="p-3">Type</th>
            <th className="p-3">Quantity</th>
            <th className="p-3">Field</th>
            <th className="p-3">Status</th>
            <th className="p-3">Planted</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {crops.map((crop, index) => (
            <tr key={index} className="border-b text-sm">
              <td className="p-3 flex items-center space-x-2">
                <span className="text-xl">{crop.icon}</span>
                <span className="font-medium text-gray-900">{crop.name}</span>
              </td>
              <td className="p-3">{crop.type}</td>
              <td className="p-3 font-semibold">{crop.quantity}</td>
              <td className="p-3">{crop.field}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    crop.status === "Growing"
                      ? "bg-green-100 text-green-600"
                      : crop.status === "Ready"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {crop.status}
                </span>
              </td>
              <td className="p-3">{crop.planted}</td>
              <td className="p-3 space-x-3">
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => onEdit(crop)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => onDelete(crop)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer (pagination) */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <p>Showing {crops.length} of 24 crops</p>
        <div className="flex space-x-1">
          <button className="px-3 py-1 border rounded-lg">Previous</button>
          <button className="px-3 py-1 border bg-green-600 text-white rounded-lg">
            1
          </button>
          <button className="px-3 py-1 border rounded-lg">2</button>
          <button className="px-3 py-1 border rounded-lg">3</button>
          <button className="px-3 py-1 border rounded-lg">Next</button>
        </div>
      </div>
    </div>
  );
};

export default CropTable;
