import Link from "next/link";
import React from "react";

const SidebarItems = ({ label, icon, path, active, isSideBarOpen }) => {
  return (
    <div>
      {isSideBarOpen ? (
        <Link href={path} className="flex gap-2 relative">
          <div>{icon}</div>
          <p>{label}</p>
        </Link>
      ) : (
        <Link>
          <div>{icon}</div>
        </Link>
      )}
    </div>
  );
};

export default SidebarItems;
