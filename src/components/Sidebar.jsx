import React from "react";
import { AiOutlineHome, AiOutlineMenu, AiOutlineBarChart } from "react-icons/ai";
import { RiUserShared2Line, RiShieldUserLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlinePhotoLibrary, MdOutlineMonetizationOn } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { TbTools } from "react-icons/tb";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const menuItems = [
    { icon: <AiOutlineHome size={24} />, label: "Dashboard" },
    { icon: <RiUserShared2Line size={24} />, label: "Connect" },
    { icon: <BiMessageSquareDetail size={24} />, label: "Inbox" },
    { icon: <AiOutlineBarChart size={24} />, label: "Analytics" },
    { icon: <MdOutlinePhotoLibrary size={24} />, label: "Media" },
    { icon: <IoGlobeOutline size={24} />, label: "Job Finder" },
    { icon: <TbTools size={24} />, label: "Pro Tools" },
    { icon: <RiShieldUserLine size={24} />, label: "Agency Hub" },
    { icon: <MdOutlineMonetizationOn size={24} />, label: "Reseller Hub" },
  ];

  return (
    <div
      className={`h-screen bg-white shadow-lg fixed top-0 left-0 z-10 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 py-4">
        {!isCollapsed && (
          <h2 className="text-lg font-semibold text-gray-800">Manage Socials</h2>
        )}
        <button onClick={toggleSidebar} className="text-gray-600">
          <AiOutlineMenu size={24} />
        </button>
      </div>

      {/* Menu Items */}
      <ul className="mt-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center p-2 hover:bg-green-500 hover:text-white cursor-pointer"
          >
            <span>{item.icon}</span>
            <span
              className={`ml-4 text-sm font-medium transition-all duration-300 ${
                isCollapsed ? "hidden" : "block"
              }`}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
