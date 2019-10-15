module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  database: 'gobarber',
  define: {
    timestamps: true, // Cria os campos created_at
    underscored: true, // Criando as tabelas no padrão ex: (user_groups)
    underscoredAll: true,
  },
};
