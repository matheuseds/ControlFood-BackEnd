//const { Sequelize } = require("sequelize");
//const config = require("./config");

//module.exports = new Sequelize(
 // config.database,
 // config.username,
  //config.password,
 // config
//);

const mysql = require('mysql2');

// criar conexão com a base de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'control_food',
  port: '3306',
  namedPlaceholders: true
});
//Funçao para testar a conexão
async function testaconexao() {
  const teste = await connection.connect();
  return 'Banco conectado!';
}


module.exports = { testaconexao, connection }
