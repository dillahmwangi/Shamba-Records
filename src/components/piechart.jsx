import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Registering only the necessary Chart.js components for a Pie chart
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const PieChartCard = () => {
  const data = {
    labels: ['Grains', 'Vegetables', 'Fruits', 'Legumes', 'Others'],
    datasets: [{
      data: [45, 26.8, 12.8, 8.5, 6.9], // Data from your image
      backgroundColor: [
        '#00BF80', // Green for Grains (slightly adjusted for visual)
        '#FF9F40', // Orange for Vegetables
        '#FF6384', // Red for Fruits
        '#6C757D', // Gray for Legumes (adjusted to match image better)
        '#9966FF'  // Purple for Others (adjusted to match image better)
      ],
      hoverOffset: 4,
      borderWidth: 0, // No border for segments
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom', // Legend at the bottom
        labels: {
          usePointStyle: true, // Use colored circles instead of squares
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += context.parsed + '%';
            }
            return label;
          }
        }
      }
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-96 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Crop Distribution</h3>
        {/* Three dots icon */}
        <span className="text-gray-400 text-xl font-bold cursor-pointer">...</span>
      </div>
      <div className="flex-grow flex items-center justify-center">
        {/* The Pie component will take the available space */}
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChartCard;