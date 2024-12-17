import React, { useState } from "react";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md w-full">
      {/* Left Section */}
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-green-600 text-white px-4 py-2 rounded-md font-medium"
        >
          Published ▼
        </button>
        {isMenuOpen && (
          <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Dashboard
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Earnings
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Sign out
              </li>
            </ul>
          </div>
        )}
      </div>

      

       {/* Profile Section */}
       <div className="flex items-center space-x-2 bg-white border border-gray-300 rounded-full px-3 py-1.5">
       <button className="p-2 rounded-full hover:bg-gray-100">
          🔔
        </button>
          <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
            {/* Profile Picture */}
            <img
              src="../../profile.svg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">
              Endurance Ewohimem
            </p>
            <p className="text-xs text-gray-500">Workspace</p>
          </div>
        </div>
      </div>
  );
};

export default TopNav;
