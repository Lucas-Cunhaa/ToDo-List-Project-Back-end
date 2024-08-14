'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('tasks', 'user_id')
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('tasks', 'state', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  }
};
