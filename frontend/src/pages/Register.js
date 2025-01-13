import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate(); // Utilize o navigate aqui

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/register", formData);
      
      toast.success(response.data.message);  // Exibe a mensagem de sucesso do backend
      // Atraso de 4 segundos antes de redirecionar
      setTimeout(() => {
        navigate("/login"); // Usando navigate para redirecionar
      }, 4000);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);  // Exibe mensagem de erro do backend
      } else {
        toast.error("Erro ao registrar usuário");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="glass-container bg-white p-10 shadow-x1 rounded-lg w-full sm:w-96">
        <h1 className="text-3xl font-bold text-center text-gray-600 mb-6">Cadastrar</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuário"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="input-field mb-4"
          />
          <input
            type="password"
            placeholder="Senha"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="input-field mb-6"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
