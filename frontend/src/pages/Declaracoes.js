import React from "react";

const Declaracoes = () => {
  const declaracoes = [
    { id: 1, nome: "Declaração de Estudos" },
    { id: 2, nome: "Declaração de Presença" },
    { id: 3, nome: "Declaração de Transporte Escolar" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Escolha o tipo de Declaração</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {declaracoes.map((declaracao) => (
          <div
            key={declaracao.id}
            className="bg-white p-4 shadow-lg rounded-lg hover:bg-indigo-100 transition"
          >
            <h2 className="text-lg font-semibold">{declaracao.nome}</h2>
            <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
              Emitir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Declaracoes;
