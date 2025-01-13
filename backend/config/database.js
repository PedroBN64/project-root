// config/database.js
const { Sequelize } = require('sequelize');

// Configuração de conexão com o banco de dados MySQL
const sequelize = new Sequelize('school_db', 'root', 'Pe159Pe1@@', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;