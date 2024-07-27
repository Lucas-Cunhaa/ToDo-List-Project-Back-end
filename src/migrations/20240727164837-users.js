'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id: {
          type : Sequelize.INTEGER,
          primaryKey : true ,
          autoIncrement: true  ,
          allowNull : false ,
      } , 
      
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');    
    /**
     * Add reverting commands here.
     *
     * Example:
     
     */
  }
};
