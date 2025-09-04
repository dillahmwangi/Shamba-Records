import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Registering only the necessary Chart.js components for a Bar chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const BarChartCard = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Harvested', // Label for the legend
      data: [2, 4, 6, 8, 12, 15, 18, 21, 16, 12, 8, 5], // Data points from your image
      backgroundColor: '#00BF40FF', 
      borderRadius: 4, // Slightly rounded bar tops
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom', // Legend at the bottom
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      x: {
        grid: {
          display: false, // No vertical grid lines
        },
        ticks: {
          color: '#6B7280', // Text color for labels
        }
      },
      y: {
        beginAtZero: true,
        max: 30, // Max value from your image
        ticks: {
          stepSize: 10, // Steps of 10 as in the image
          color: '#6B7280',
        },
        grid: {
          color: '#E5E7EB', // Light gray horizontal grid lines
        },
        title: {
          display: true,
          text: 'Crops Harvested',
          color: '#6B7280',
        }
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-96 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Monthly Harvest Progress</h3>
        {/* Three dots icon */}
        <span className="text-gray-400 text-xl font-bold cursor-pointer">...</span>
      </div>
      <div className="flex-grow flex items-center justify-center">
        {/* The Bar component will take the available space */}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChartCard;