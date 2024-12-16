import React from "react";
import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from "lucide-react";

const SideNav = () => {
  const MenuOption = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      icon: PanelsTopLeft,
    },
    {
      id: 2,
      name: "Create New",
      path: "/create-new",
      icon: FileVideo,
    },
    {
      id: 3,
      name: "Upgrade",
      path: "/upgrade",
      icon: ShieldPlus,
    },
    {
      id: 4,
      name: "Account",
      path: "/account",
      icon: CircleUser,
    },
  ];

  return (
    <div className="w-64 h-screen shadow-md p-5">
      <div className="grid gap-2">
        {MenuOption.map((item) => (
          <div key={item.id} className="flex items-center gap-3 py-2">
            <item.icon />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
