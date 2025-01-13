const Aluno = require('../models/aluno');

exports.getAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter alunos', error });
  }
};

exports.createAluno = async (req, res) => {
  try {
    const aluno = await Aluno.create(req.body);
    res.status(201).json(aluno);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar aluno', error });
  }
};