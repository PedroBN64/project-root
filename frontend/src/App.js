import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import FichaDoAluno from "./pages/FichaDoAluno";
import CadastroDeAlunos from "./pages/CadastroDeAlunos";
import TransporteEscolar from "./pages/TransporteEscolar";
import CadastroDeProfissionais from "./pages/CadastroDeProfissionais";
import ConsultaDeDados from "./pages/ConsultaDeDados";
import Declaracoes from "./pages/Declaracoes";
import Usuarios from "./pages/Usuarios";
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
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="ficha-do-aluno" element={<FichaDoAluno />} />
          <Route path="cadastro-de-alunos" element={<CadastroDeAlunos />} />
          <Route path="transporte-escolar" element={<TransporteEscolar />} />
          <Route path="cadastro-de-profissionais" element={<CadastroDeProfissionais />} />
          <Route path="consulta-de-dados" element={<ConsultaDeDados />} />
          <Route path="declaracoes" element={<Declaracoes />} />
          <Route path="usuarios" element={<Usuarios />} />
        </Route>

      </Routes>
      <ToastContainer /> {/* Coloque o ToastContainer aqui */}
    </Router>
  );
}

export default App;
