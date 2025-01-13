import React from "react";
import Sidebar from "../components/Sidebar"; // A sidebar do Dashboard
import { Outlet } from "react-router-dom"; // Para renderizar as rotas aninhadas

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar /> {/* Sidebar será fixada no layout */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet /> {/* Aqui será renderizado o conteúdo das rotas aninhadas */}
      </main>
    </div>
  );
};

export default Dashboard;
