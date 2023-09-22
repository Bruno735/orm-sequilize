const Sequelize = require("sequelize"); //! Importando 

const dbConfig = require("../config/database"); //! Importando o arquivo de configuração do banco de dados 

const User = require("../models/User");

const connection = new Sequelize(dbConfig); //! Criando a conexão com banco de dados

User.init(connection);

module.exports = connection; //! Exportando a conexão com o banco de dados

