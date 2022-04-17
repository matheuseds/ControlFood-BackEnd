"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        "Empresa",
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          cnpj: {
            type: Sequelize.STRING,
          },
          nome_empresa: {
            type: Sequelize.STRING,
          },
          email: {
            type: Sequelize.STRING,
          },
          nome_responsavel: {
            type: Sequelize.STRING,
          },
          contato_responsavel: {
            type: Sequelize.STRING,
          },
          endereco: {
            type: Sequelize.STRING,
          },
          cidade: {
            type: Sequelize.STRING,
          },
          estado: {
            type: Sequelize.STRING,
          },
          cep: {
            type: Sequelize.STRING,
          },
          created_at: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn("now"),
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn("now"),
          },
        },
        { transaction }
      );
      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
      throw e;
    }
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Empresa");
  },
};
