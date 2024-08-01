'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const { DataTypes } = Sequelize
    await queryInterface.createTable('tasks', { 
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users', 
          key: 'id'
        }, 
        allowNull: false , 
        onUpdate: 'CASCADE', 
        onDelete: 'SET NULL' 
      },
      
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
      
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');    
    /**
     * Add reverting commands here.
     *
     * Example:
     
     */
  }
};
