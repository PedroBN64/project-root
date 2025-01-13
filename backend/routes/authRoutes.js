const express = require('express');
const router = express.Router();
const passport = require('passport');
const Usuario = require('../models/Usuario');

// Rota de registro de usuário
router.post('/register', async (req, res) => {
  console.log('Dados recebidos:', req.body);  // Verifique no console se os dados estão chegando

  const { username, password } = req.body;

  // Verifique se o username e password foram enviados
  if (!username || !password) {
    return res.status(400).json({ message: 'Username e password são obrigatórios!' });
  }

  try {
    // Verifique se o usuário já existe
    const usuarioExistente = await Usuario.findOne({ where: { username } });
    if (usuarioExistente) {
      return res.status(400).json({ message: 'Nome de usuário já existe!' });
    }

    // Registre o novo usuário
    const novoUsuario = await Usuario.create({ username, password });
    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar usuário', error: error.message });
  }
});

// Rota de login
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.status(200).json({ message: 'Login bem-sucedido', user: req.user });
});

// Rota de logout
router.post('/logout', (req, res) => {
  req.logout(err => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao fazer logout', error: err.message });
    }
    res.status(200).json({ message: 'Logout bem-sucedido' });
  });
});

module.exports = router;
