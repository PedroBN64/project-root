import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [expandedMenus, setExpandedMenus] = useState({});
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
    setExpandedMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const userName = "João Silva"; // Deve ser obtido do backend

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        expandedMenus={expandedMenus}
        toggleMenu={toggleMenu}
        activeMenu={activeMenu}
        userName={userName}
      />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;