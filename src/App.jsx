import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import PostEditor from "./components/PostEditor";
import CampaignSettings from "./components/CampaignSettings";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarCollapsed ? "md:ml-16" : "md:ml-64"
        }`}
      >
        {/* Top Navigation */}
        <TopNav />

        {/* Content */}
        <div className="p-4 flex-1 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PostEditor />
            <CampaignSettings />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
