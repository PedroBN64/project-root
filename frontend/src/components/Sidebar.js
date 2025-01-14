import React, { useState, useEffect, useRef } from "react";
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
  const [activeMenu, setActiveMenu] = useState(null);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const toggleMenu = (menu) => {
    setExpandedMenus((prevState) => {
      const newExpandedMenus = Object.keys(prevState).reduce(
        (acc, key) => ({ ...acc, [key]: false }),
        {}
      );
      newExpandedMenus[menu] = !prevState[menu];
      return newExpandedMenus;
    });
    setActiveMenu(menu === activeMenu ? null : menu);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !isSidebarOpen) {
      setExpandedMenus({});
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const menuItems = [
    {
      label: 'Gestão Escolar',
      icon: <FaBook className="text-lg md:text-2xl" />, // Tamanho ajustado aqui
      submenu: [
        { label: 'Ficha do Aluno', link: '/dashboard/ficha-do-aluno' },
        { label: 'Cadastro de Alunos', link: '/dashboard/cadastro-de-alunos' },
        { label: 'Transporte Escolar', link: '/dashboard/transporte-escolar' },
      ],
    },
    {
      label: 'Recursos Humanos',
      icon: <FaUsers className="text-lg md:text-2xl" />, // Tamanho ajustado aqui
      submenu: [
        { label: 'Cadastro de Profissionais', link: '/dashboard/cadastro-de-profissionais' },
        { label: 'Consulta de Dados', link: '/dashboard/consulta-de-dados' },
      ],
    },
    {
      label: 'Administrativo',
      icon: <FaMoneyCheck className="text-lg md:text-2xl" />, // Tamanho ajustado aqui
      submenu: [
        { label: 'Declarações', link: '/dashboard/declaracoes' },
      ],
    },
    {
      label: 'Configurações',
      icon: <FaCogs className="text-lg md:text-2xl" />, // Tamanho ajustado aqui
      submenu: [
        { label: 'Usuários', link: '/dashboard/usuarios' },
      ],
    },
  ];

  return (
    <div ref={sidebarRef} className="flex">
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-gradient-to-r from-indigo-600 to-purple-700 h-screen text-white flex flex-col transition-all duration-300 relative`}
      >
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
        <nav className="mt-6">
          <ul className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <li key={item.label} className="relative">
                <button
                  className={`flex items-center w-full px-4 py-2 hover:bg-indigo-500 focus:outline-none ${
                    !isSidebarOpen ? "justify-center text-2xl" : ""
                  }`}
                  onClick={() => toggleMenu(item.label)}
                >
                  {item.icon}
                  {isSidebarOpen && <span className="ml-3 flex-1">{item.label}</span>}
                  {isSidebarOpen &&
                    (expandedMenus[item.label] ? (
                      <FaChevronUp className="text-sm" />
                    ) : (
                      <FaChevronDown className="text-sm" />
                    ))}
                </button>
                {(expandedMenus[item.label] || (activeMenu === item.label && !isSidebarOpen)) && (
                  <ul
                    className={`${
                      isSidebarOpen ? "pl-4" : "absolute left-20 top-0 mt-0"
                    } mt-2 space-y-1 bg-indigo-700 shadow-lg rounded-md`}
                  >
                    {item.submenu.map((submenuItem) => (
                      <li key={submenuItem.label}>
                        <Link
                          to={submenuItem.link}
                          className="flex items-center py-1 px-6 hover:bg-indigo-600 rounded-md"
                        >
                          {submenuItem.icon || <FaUser className="inline mr-2" />}
                          {submenuItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

