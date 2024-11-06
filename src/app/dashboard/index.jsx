
import Header from "@/components/components/header";
import SideBar from "@/components/components/side-nav";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Header/>
      <div className="flex">
        <SideBar/>
        <div className="overflow-auto">
           home
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
