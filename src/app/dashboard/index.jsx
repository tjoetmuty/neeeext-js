
import Header from "@/components/components/header";
import SideBar from "@/components/components/side-nav";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Header/>
      <div className="flex">
        <SideBar/>
        <div className="overflow-auto bg-gray-300 w-full h-screen">
        {[...Array(100)].map((_, i) => (
          <p key={i}>Home Content Line {i + 2}</p>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
