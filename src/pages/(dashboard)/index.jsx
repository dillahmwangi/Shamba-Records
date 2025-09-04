import React, { useState } from 'react';
import { FaUsers, FaSeedling } from 'react-icons/fa';
import { LuWallet } from "react-icons/lu";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { AdminDashboardCards } from '../../components/cardContainer';
import FarmerTable from '../../components/farmersTable';
import profile from "../../assets/profile.jpg";
import { FaTractor } from "react-icons/fa";
import BarChartCard from '../../components/barchart';
import PieChartCard from '../../components/piechart';
import { GiWheat, GiCorn, GiTomato } from "react-icons/gi";
import CropTable from "../../components/tabelComponent";


const Home= () => {


    const initialFarmers = [
  {
    name: "Michael Johnson",
    farmerId: "F001",
    email: "michael.johnson@email.com",
    phone: "+1 (555) 123-4567",
    crops: ["Wheat", "Corn", "Soy"],
    status: "Active",
    joined: "Jan 15, 2024",
 
  },
  {
    name: "Sarah Williams",
    farmerId: "F002",
    email: "sarah.williams@email.com",
    phone: "+1 (555) 987-6543",
    crops: ["Rice", "Soy", "Corn", "Tomato"],
    status: "Active",
    joined: "Feb 3, 2024",

  },
  {
    name: "David Brown",
    farmerId: "F003",
    email: "david.brown@email.com",
    phone: "+1 (555) 456-7890",
    crops: ["Wheat", "Tomato"],
    status: "Pending",
    joined: "Mar 8, 2024",
   
  },
];

    const recentActivityData = [
        {
            user: 'Maria Rodriguez',
            action: 'added new crop',
            item: 'Organic Tomatoes',
            time: '2 mins ago',
        },
        {
            user: 'John Anderson',
            action: 'updated farm profile',
            item: 'Farm B',
            time: '15 mins ago',
        },
        {
            user: 'Alex Chen',
            action: 'uploaded financial report',
            item: 'Q3 2024',
            time: '1 hr ago',
        },
        {
            user: 'Sara Lee',
            action: 'completed harvest for',
            item: 'Wheat',
            time: '2 hrs ago',
        },
    ];
    const summaryData = [
    {
      title: "Total Farmers",
      value: "847",
      change: "+12%",
      period: "vs last month",
      icon: (
        <FaUsers className="w-8 h-8 text-blue-600 p-2 bg-blue-100 rounded-lg" />
      ),
    },
    {
      title: "Total Crops",
      value: "1,243",
      change: "+8%",
      period: "vs last month",
      icon:
     (<GiWheat className="w-8 h-8 text-green-600 p-2 bg-green-100 rounded-lg" />
     ),
    },
  ];

  const crops = [
    {
      name: "Winter Wheat",
      type: "Grain",
      quantity: "2,500 bushels",
      field: "Field A-1",
      status: "Growing",
      planted: "Oct 15, 2024",
      icon: <GiWheat className="text-green-600" />,
    },
    {
      name: "Sweet Corn",
      type: "Vegetable",
      quantity: "1,800 ears",
      field: "Field B-2",
      status: "Ready",
      planted: "Aug 20, 2024",
      icon: <GiCorn className="text-yellow-500" />,
    },
    {
      name: "Tomatoes",
      type: "Vegetable",
      quantity: "3,200 lbs",
      field: "Field C-1",
      status: "Harvested",
      planted: "Jul 10, 2024",
      icon: <GiTomato className="text-red-500" />,
    },
  ];

    const [farmers, setFarmers] = useState(initialFarmers);

  const handleAdd = (newFarmer) => {
    setFarmers([...farmers, newFarmer]);
  };

  const handleView = (farmer) => alert(`Viewing: ${farmer.name}`);
  const handleEdit = (farmer) => alert(`Editing: ${farmer.name}`);
  const handleDelete = (farmer) =>
    setFarmers(farmers.filter((f) => f.farmerId !== farmer.farmerId));

    return (
        <div className="p-8 space-y-8 ">
            {/* Dashboard Header */}
            <div className="flex gap-6 mb-6">
      {/* Overview Header - larger section */}
      <div className="w-2/4 bg-[#00BF40FF] p-6 rounded-2xl shadow-md  ">
        <h1 className="text-2xl font-semibold text-white">
          Dashboard Overview
        </h1>
        <p className="text-white mt-1">
          Welcome back! Here's what's happening with your cooperative today.
        </p>
      </div>

      {/* Summary Cards */}
      {summaryData.map((item, index) => (
        <div key={index} className="w-1/4">
          <div className="bg-white p-8 rounded-2xl shadow-md flex items-center justify-between border-r-4 border-green-600">
            <div>
              <p className="text-gray-500 text-sm font-medium">{item.title}</p>
              <h2 className="text-3xl font-bold text-gray-900 mt-1">
                {item.value}
              </h2>
              <p
                className={`text-sm mt-1 ${
                  item.change.startsWith("+")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item.change}{" "}
                <span className="text-gray-500">{item.period}</span>
              </p>
            </div>
            {item.icon}
          </div>
        </div>
      ))}
    </div>

  <FarmerTable
      farmers={farmers}
      onView={handleView}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onAdd={handleAdd}
    />
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <PieChartCard/>
      <BarChartCard/>
    </div>

      <CropTable crops={crops} onEdit={handleEdit} onDelete={handleDelete} />

           
        </div>
    );
};

export default Home;
