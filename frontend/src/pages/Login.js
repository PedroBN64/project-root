import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/auth/login", formData);
      toast.success("Login bem-sucedido!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png" // Substitua pelo caminho da sua logo
              alt="Secretaria Digital Logo"
              className="h-10"
            />
            <span className="ml-3 text-xl font-bold text-gray-800">Secretaria Digital</span>
          </div>
          {/* Links */}
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                Holerite
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                Calendário Escolar
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                Horário de Aulas
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                Prefeitura Municipal
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                Ferramentas
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Login Form */}
      <div className="flex items-center justify-center flex-grow">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-0">Secretaria Digital 2.0</h1>
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">- Login -</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-0">
                Usuário
              </label>
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Digite seu usuário"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-0">
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Digite sua senha"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Entrar
            </button>
          </form>
          <div className="mt-2 text-center">
            <p className=" text-sm text-gray-600">
              Não tem uma conta?{" "}
              <a href="/register" className="text-indigo-600 hover:text-indigo-700">
                Registre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
