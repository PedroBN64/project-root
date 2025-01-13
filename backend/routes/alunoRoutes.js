const express = require('express');
const alunoController = require('../controllers/alunoController');

const router = express.Router();

router.get('/alunos', alunoController.getAlunos);
router.post('/alunos', alunoController.createAluno);

module.exports = router;