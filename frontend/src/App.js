import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify"; // Importe o ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Importe os estilos do Toastify
import './App.css';
import './css/styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Sidebar será renderizada no Dashboard */}
      </Routes>
      <ToastContainer /> {/* Coloque o ToastContainer aqui */}
    </Router>
  );
}

export default App;
