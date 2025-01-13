import React, { useState } from "react";
import {
  FaUser,
  FaBook,
  FaBus,
  FaCogs,
  FaSignOutAlt,
  FaUsers,
  FaMoneyCheck,
  FaTools,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ userName }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const toggleMenu = (menu) => {
    setExpandedMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div
      className={`${
        isSidebarOpen ? "w-64" : "w-20"
      } bg-gradient-to-r from-indigo-600 to-purple-700 h-screen text-white flex flex-col transition-all duration-300 relative`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          {isSidebarOpen && (
            <h1 className="text-2xl font-bold">Secretaria Digital</h1>
          )}
        </div>
        <button onClick={toggleSidebar} className="text-xl focus:outline-none">
          {isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>

      {/* User Avatar */}
      <div className="flex flex-col items-center mt-4">
        <img
          src="/logo192.png"
          alt="User Avatar"
          className="w-20 h-20 rounded-full border-4 border-white"
        />
        {isSidebarOpen && (
          <>
            <p className="mt-2 text-lg font-semibold">{userName}</p>
            <span className="text-sm text-gray-300">Logado</span>
          </>
        )}
      </div>

      {/* Menu */}
      <nav className="mt-6">
        <ul className="flex flex-col space-y-2">
          {/* Gestão Escolar */}
          <li className="relative">
            <button
              className="flex items-center w-full px-4 py-2 hover:bg-indigo-500 focus:outline-none"
              onClick={() => toggleMenu("gestaoEscolar")}
            >
              <FaBook className="text-xl" />
              {isSidebarOpen && <span className="ml-3 flex-1">Gestão Escolar</span>}
              {isSidebarOpen &&
                (expandedMenus.gestaoEscolar ? (
                  <FaChevronUp className="text-sm" />
                ) : (
                  <FaChevronDown className="text-sm" />
                ))}
            </button>
            {expandedMenus.gestaoEscolar && (
              <ul className="pl-4 mt-2 space-y-1 bg-indigo-700 shadow-lg rounded-md">
                <li>
                  <Link to="/dashboard/ficha-do-aluno" className="flex items-center py-1 hover:bg-indigo-600 rounded-md">
                    <FaUser className="inline mr-2" />
                    Ficha do Aluno
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/cadastro-de-alunos" className="flex items-center py-1 hover:bg-indigo-600 rounded-md">
                    <FaUser className="inline mr-2" />
                    Cadastro de Alunos
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/transporte-escolar" className="flex items-center py-1 hover:bg-indigo-600 rounded-md">
                    <FaBus className="inline mr-2" />
                    Transporte Escolar
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Recursos Humanos */}
          <li className="relative">
            <button
              className="flex items-center w-full px-4 py-2 hover:bg-indigo-500 focus:outline-none"
              onClick={() => toggleMenu("recursosHumanos")}
            >
              <FaUsers className="text-xl" />
              {isSidebarOpen && <span className="ml-3 flex-1">Recursos Humanos</span>}
              {isSidebarOpen &&
                (expandedMenus.recursosHumanos ? (
                  <FaChevronUp className="text-sm" />
                ) : (
                  <FaChevronDown className="text-sm" />
                ))}
            </button>
            {expandedMenus.recursosHumanos && (
              <ul className="pl-4 mt-2 space-y-1 bg-indigo-700 shadow-lg rounded-md">
                <li>
                  <Link to="/dashboard/cadastro-de-profissionais" className="flex items-center py-1 hover:bg-indigo-600 rounded-md">
                    <FaUser className="inline mr-2" />
                    Cadastro de Profissionais
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/consulta-de-dados" className="flex items-center py-1 hover:bg-indigo-600 rounded-md">
                    <FaUser className="inline mr-2" />
                    Consulta de Dados
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Administrativo */}
          <li className="relative">
            <button
              className="flex items-center w-full px-4 py-2 hover:bg-indigo-500 focus:outline-none"
              onClick={() => toggleMenu("administrativo")}
            >
              <FaMoneyCheck className="text-xl" />
              {isSidebarOpen && <span className="ml-3 flex-1">Administrativo</span>}
              {isSidebarOpen &&
                (expandedMenus.administrativo ? (
                  <FaChevronUp className="text-sm" />
                ) : (
                  <FaChevronDown className="text-sm" />
                ))}
            </button>
            {expandedMenus.administrativo && (
              <ul className="pl-4 mt-2 space-y-1 bg-indigo-700 shadow-lg rounded-md">
                <li>
                  <Link to="/dashboard/declaracoes" className="flex items-center py-1 hover:bg-indigo-600 rounded-md">
                    <FaTools className="inline mr-2" />
                    Declarações
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Configurações */}
          <li className="relative">
            <button
              className="flex items-center w-full px-4 py-2 hover:bg-indigo-500 focus:outline-none"
              onClick={() => toggleMenu("configuracoes")}
            >
              <FaCogs className="text-xl" />
              {isSidebarOpen && <span className="ml-3 flex-1">Configurações</span>}
              {isSidebarOpen &&
                (expandedMenus.configuracoes ? (
                  <FaChevronUp className="text-sm" />
                ) : (
                  <FaChevronDown className="text-sm" />
                ))}
            </button>
            {expandedMenus.configuracoes && (
              <ul className="pl-4 mt-2 space-y-1 bg-indigo-700 shadow-lg rounded-md">
                <li>
                  <Link to="/dashboard/usuarios" className="flex items-center py-1 hover:bg-indigo-600 rounded-md">
                    <FaUser className="inline mr-2" />
                    Usuários
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Sair */}
          <li>
            <button
              className="flex items-center w-full px-4 py-2 text-red-400 hover:bg-indigo-500 focus:outline-none"
            >
              <FaSignOutAlt className="text-xl" />
              {isSidebarOpen && <span className="ml-3">Sair</span>}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
