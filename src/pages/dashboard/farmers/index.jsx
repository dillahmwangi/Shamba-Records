import React from "react";
import Header from "../../../components/header";
import StatsCardsContainer from "../../../components/cardContainer";
import BarChartCard from "../../../components/barchart";
import PieChartCard from "../../../components/piechart";
const Index = () => {
  return (
    <>
    <div className="">
      <Header />

      <StatsCardsContainer />
      
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <PieChartCard />
      <BarChartCard />
    </div>
    </div>
    </>
  );
};

export default Index;