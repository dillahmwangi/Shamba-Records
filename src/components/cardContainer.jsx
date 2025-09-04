import React from "react";
import { GiWheat } from "react-icons/gi";
import { FaMap, FaDollarSign } from "react-icons/fa";
import { TbBox } from "react-icons/tb"; 


const StatCard = ({ title, value, subText, icon, iconBgColor }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
        <div className="text-xs mt-1">{subText}</div>
      </div>
      <div className={`w-10 h-10 flex items-center justify-center rounded-full ${iconBgColor}`}>
        {icon}
      </div>
    </div>
  );
};


const StatsCardsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      <StatCard
        title="Total Crops"
        value="24"
        subText={<span className="text-green-500">↑ +3 this month</span>}
        icon={<GiWheat className="text-blue-500 text-xl" />}
        iconBgColor="bg-blue-100"
      />
      <StatCard
        title="Active Fields"
        value="8"
        subText="Across 45 acres"
        icon={<FaMap className="text-green-500 text-xl" />}
        iconBgColor="bg-green-100"
      />
      <StatCard
        title="Harvest Ready"
        value="6"
        subText={<span className="text-red-500">⚠ 2 overdue</span>}
      
        icon={<TbBox className="text-orange-500 text-xl" />}
        iconBgColor="bg-orange-100"
      />
      <StatCard
        title="Revenue (MTD)"
        value="$12,450"
        subText={<span className="text-green-500">↑ +15.3%</span>}
        icon={<FaDollarSign className="text-purple-500 text-xl" />}
        iconBgColor="bg-purple-100"
      />
    </div>
  );
};

export default StatsCardsContainer;


export const AdminDashboardCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      <StatCard
        title="Total Farmers"
        value="24"
        subText={<span className="text-green-500">↑ +3 this month</span>}
        icon={<GiWheat className="text-blue-500 text-xl" />}
        iconBgColor="bg-blue-100"
      />
      <StatCard
        title="Total Crops"
        value="8"
        subText="Across 45 acres"
        icon={<FaMap className="text-green-500 text-xl" />}
        iconBgColor="bg-green-100"
      />
      <StatCard
        title="Active Farmers"
        value="6"
        subText={<span className="text-red-500">⚠ 2 overdue</span>}
      
        icon={<TbBox className="text-orange-500 text-xl" />}
        iconBgColor="bg-orange-100"
      />
      <StatCard
        title="Revenue (MTD)"
        value="$12,450"
        subText={<span className="text-green-500">↑ +15.3%</span>}
        icon={<FaDollarSign className="text-purple-500 text-xl" />}
        iconBgColor="bg-purple-100"
      />
    </div>
  );
};


