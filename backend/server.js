const express = require('express');
const app = express();
const passport = require('./config/passport');
const session = require('express-session');
const sequelize = require('./config/database');
const cors = require('cors');
const Usuario = require('./models/Usuario');
const authRoutes = require('./routes/authRoutes');

// Adicionando o middleware CORS
app.use(cors({
  origin: 'http://localhost:3000', // Permitir acesso apenas do frontend
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Middleware para o Express (analisadores de corpo)
app.use(express.json());  // Para analisar o corpo das requisições JSON
app.use(express.urlencoded({ extended: true }));  // Para analisar requisições com dados de formulários

// Configuração da sessão
app.use(session({
  secret: 'segredo-seguro',
  resave: false,
  saveUninitialized: true,
}));

// Inicializa Passport
app.use(passport.initialize());
app.use(passport.session());

// Adicionando as rotas de autenticação
app.use('/auth', authRoutes);

// Rota principal para teste
app.get('/', (req, res) => {
  res.send('Servidor está funcionando! 🚀');
});

// Porta onde o servidor será executado
const PORT = 3001;

// Sincronizar banco de dados e iniciar servidor
sequelize.sync({ force: false })
  .then(() => {
    console.log('Banco de dados sincronizado');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => console.error('Erro ao sincronizar banco de dados:', err));
