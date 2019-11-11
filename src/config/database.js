require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // Cria os campos created_at
    underscored: true, // Criando as tabelas no padrão ex: (user_groups)
    underscoredAll: true,
  },
};
