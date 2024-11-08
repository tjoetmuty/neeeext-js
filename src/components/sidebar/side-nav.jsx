"use client";

import { useState } from "react";
import NavItems from "@/config";
import SidebarItems from "./sideItems";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navItems = NavItems();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div
      className={`${
        isSidebarOpen ? "w-[200px]" : "w-[68px]"
      } border-r transition-all duration-300 ease-in-out`}
    >
      {/* top */}
      {navItems.map((item, index) =>
        item.position === "top" ? (
          <div key={index}>
            <SidebarItems
              label={item.name}
              icon={item.icon}
              href={item.href}
              active={item.active}
              isSideBarOpen={isSidebarOpen}
            />
          </div>
        ) : (
          <div key={index} className="bottom-0 mt-auto mb-4">
            <SidebarItems
              label={item.name}
              icon={item.icon}
              href={item.href}
              active={item.active}
              isSideBarOpen={isSidebarOpen}
            />
          </div>
        )
      )}
      <div className="">
        <button type="button" className="absolute cursor-pointer left-4 top-12 w-8 border-2 border-[#1E1E1E] bg-white  rounded-full" onClick={toggleSidebar}>
          {isSidebarOpen ? (<ChevronLeft size={16}/>) : (<ChevronRight size={16}/>)}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
