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
          nomeEmpresa: {
            type: Sequelize.STRING,
          },
          email: {
            type: Sequelize.STRING,
          },
          nomeResponsavel: {
            type: Sequelize.STRING,
          },
          contatoResponsavel: {
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
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn("now"),
          },
          updatedAt: {
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
