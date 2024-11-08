import Link from "next/link";
import React from "react";

const SidebarItems = ({ label, icon, href, active, isSideBarOpen }) => {
  return (
    <div>
      {isSideBarOpen ? (
        <Link href={href} className="flex gap-2 relative items-center m-2">
          <div>{icon}</div>
          <p>{label}</p>
        </Link>
      ) : (
        <div className="flex flex-col items-center gap-6">{icon}</div>
      )}
    </div>
  );
};

export default SidebarItems;
