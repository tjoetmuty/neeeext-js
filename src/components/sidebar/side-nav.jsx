"use client";

import { useState } from "react";
import NavItems from "@/config";
import SidebarItems from "./sideItems";

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
          <div key={index} className="sticky bottom-0 mt-auto mb-4 block">
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
    </div>
  );
};

export default SideBar;
