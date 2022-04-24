"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("colaborador", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
      },
      cpf: {
        type: Sequelize.STRING,
      },
      nome_empresa: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      numero_matricula: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("colaborador");
  },
};
