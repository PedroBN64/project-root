import React, { useState } from "react";

const Declaracoes = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedDeclaracao, setSelectedDeclaracao] = useState(null);
  const [formData, setFormData] = useState({
    nomeAluno: "",
    raAluno: "",
    dataNascimento: "",
    anoEnsino: "",
    tipoDeclaracao: []
  });

  const declaracoes = [
    { id: 1, nome: "Declaração de Estudos" },
    { id: 2, nome: "Declaração de Presença" },
    { id: 3, nome: "Declaração de Transporte Escolar" },
  ];

  const handleEmitirClick = (declaracao) => {
    setSelectedDeclaracao(declaracao);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => {
      const newTipos = checked
        ? [...prevState.tipoDeclaracao, name]
        : prevState.tipoDeclaracao.filter(tipo => tipo !== name);
      return { ...prevState, tipoDeclaracao: newTipos };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para lidar com o envio do formulário
    alert("Declaração emitida com sucesso!");
    setShowForm(false);
  };

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
            <button
              className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
              onClick={() => handleEmitirClick(declaracao)}
            >
              Emitir
            </button>
          </div>
        ))}
      </div>

      {showForm && selectedDeclaracao.nome === "Declaração de Estudos" && (
        <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Formulário de {selectedDeclaracao.nome}</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Nome do Aluno</label>
            <input
              type="text"
              name="nomeAluno"
              value={formData.nomeAluno}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">RA</label>
            <input
              type="text"
              name="raAluno"
              value={formData.raAluno}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Data de Nascimento</label>
            <input
              type="date"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Ano do Ensino Fundamental</label>
            <input
              type="text"
              name="anoEnsino"
              value={formData.anoEnsino}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Opções de Declaração</label>
            <div className="mb-2">
              <label>
                <input
                  type="checkbox"
                  name="matriculado"
                  checked={formData.tipoDeclaracao.includes("matriculado")}
                  onChange={handleCheckboxChange}
                />
                É aluno(a) regularmente matriculado(a) e frequentando até a presente data o {formData.anoEnsino} Ano do Ensino Fundamental de 9 anos.
              </label>
            </div>
            <div className="mb-2">
              <label>
                <input
                  type="checkbox"
                  name="matriculadoAnterior"
                  checked={formData.tipoDeclaracao.includes("matriculadoAnterior")}
                  onChange={handleCheckboxChange}
                />
                Foi aluno(a) regularmente matriculado(a) no ____Ano do Ensino Fundamental de 9 anos, nesta Unidade Escolar, no ano de ______, tendo sido considerado(a) _________. Estando apto(a) a cursar o ______ Ano do Ensino Fundamental.
              </label>
            </div>
            <div className="mb-2">
              <label>
                <input
                  type="checkbox"
                  name="concluiu"
                  checked={formData.tipoDeclaracao.includes("concluiu")}
                  onChange={handleCheckboxChange}
                />
                Concluiu o 5° Ano do Ensino Fundamental de 9 anos, nesta Unidade Escolar, no ano letivo de 2024, estando apto(a) a cursar o 6° Ano do Ensino Fundamental.
              </label>
            </div>
            <div className="mb-2">
              <label>
                <input
                  type="checkbox"
                  name="transferenciaEnsino"
                  checked={formData.tipoDeclaracao.includes("transferenciaEnsino")}
                  onChange={handleCheckboxChange}
                />
                Solicitou, nesta data, sua TRANSFERÊNCIA para outra Unidade Escolar, com direito a matricular-se no _____Ano do Ensino Fundamental de 9 anos.
              </label>
            </div>
            <div className="mb-2">
              <label>
                <input
                  type="checkbox"
                  name="transferenciaInfantil"
                  checked={formData.tipoDeclaracao.includes("transferenciaInfantil")}
                  onChange={handleCheckboxChange}
                />
                Solicitou, nesta data, sua TRANSFERÊNCIA para outra Unidade Escolar, com direito a matricular-se no _________ da Educação Infantil.
              </label>
            </div>
            <div className="mb-2">
              <label>
                <input
                  type="checkbox"
                  name="provaEscolaridade"
                  checked={formData.tipoDeclaracao.includes("provaEscolaridade")}
                  onChange={handleCheckboxChange}
                />
                Foi submetido(a) a prova de escolaridade nesta Unidade Escolar em ___/___/___ e atingiu os objetivos propostos, estando apto(a) a matricular-se ____Ano do Ensino Fundamental de 9 anos.
              </label>
            </div>
            <div className="mb-2">
              <label>
                <input
                  type="checkbox"
                  name="vaga"
                  checked={formData.tipoDeclaracao.includes("vaga")}
                  onChange={handleCheckboxChange}
                />
                Solicitou vaga no ____Ano do Ensino Fundamental de 9 anos, a qual lhe será concedida se retornar para efetuar matrícula no prazo de ____ dias.
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default Declaracoes;
