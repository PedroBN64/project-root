import React from "react";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const userName = "Pedro Augusto"; // Deve ser obtido do backend

  return (
    <div className="flex h-screen">
      <Sidebar userName={userName} />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
