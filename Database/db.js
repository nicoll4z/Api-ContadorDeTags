const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('contadorTags', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate().then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });

module.exports = sequelize;
