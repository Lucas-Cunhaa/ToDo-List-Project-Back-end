'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('tasks', 'state', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "To Do"
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('tasks', 'state', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  }
};
