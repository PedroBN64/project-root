project-root/
│
├── backend/               # Aqui fica o código do servidor (Node.js)
│   ├── config/             # Configurações (por exemplo, banco de dados, autenticação, etc.)
│   │   └── database.js     # Arquivo de configuração do banco de dados (sequelize)
│   ├── controllers/        # Lógica dos controladores (módulos de API, etc.)
│   ├── models/             # Definições dos modelos do Sequelize
│   ├── routes/             # Arquivos que definem as rotas da API
│   ├── server.js           # Arquivo principal que inicializa o servidor
│   ├── migrations/         # Arquivos de migração do banco de dados (Sequelize)
│   └── seeders/            # Arquivos de semeadura para popular o banco
│
├── frontend/               # Aqui fica o código do cliente (React.js)
│   ├── public/             # Arquivos públicos (ícones, imagens)
│   ├── src/                # Código-fonte do React
│   │   ├── components/     # Componentes reutilizáveis
│   │   ├── pages/          # Páginas do site
│   │   ├── App.js          # Arquivo principal do React
│   │   └── index.js        # Arquivo que renderiza o App
│   └── package.json        # Dependências do frontend
│
├── .gitignore              # Arquivo para ignorar arquivos que não devem ser versionados
└── package.json            # Dependências do backend (Node.js)