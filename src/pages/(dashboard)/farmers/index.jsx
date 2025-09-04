import React from "react";
import Header from "../../../components/header";
import StatsCardsContainer from "../../../components/cardContainer";
import BarChartCard from "../../../components/barchart";
import PieChartCard from "../../../components/piechart";
 import CropManagement from "../../../components/addcrop"
  import { GiWheat, GiCorn, GiTomato } from "react-icons/gi";
  import CropTable from "../../../components/tabelComponent";
  import { AdminDashboardCards } from "../../../components/cardContainer";
const Index = () => {
 
  
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

    const handleEdit = (crop) => {
    alert(`Edit crop: ${crop.name}`);
  };

  const handleDelete = (crop) => {
    alert(`Delete crop: ${crop.name}`);
  };
  return (
    <>
    <div className="space-y-8 p-8 ">
      <Header />

   
     
      <CropManagement />
      <CropTable crops={crops} onEdit={handleEdit} onDelete={handleDelete} />
 
      
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <PieChartCard />
      <BarChartCard />
    </div>
    </div>
    </>
  );
};

export default Index;