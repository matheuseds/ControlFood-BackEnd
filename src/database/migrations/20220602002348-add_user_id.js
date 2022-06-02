"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("colaborador", "user_id", Sequelize.INTEGER);

    await queryInterface.addColumn("empresa", "user_id", Sequelize.INTEGER);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("colaborador", "user_id");

    await queryInterface.removeColumn("empresa", "user_id");
  },
};
