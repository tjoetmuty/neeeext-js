import Link from "next/link";
import React from "react";

const SidebarItems = ({ label, icon, href, active, isSideBarOpen }) => {
  return (
    <div>
      {isSideBarOpen ? (
        <Link href={href} className="flex items-center mx-6 gap-6">
          <div>{icon}</div>
          <p>{label}</p>
        </Link>
      ) : (
        <div className="flex flex-col mx-6">{icon}</div>
      )}
    </div>
  );
};

export default SidebarItems;
