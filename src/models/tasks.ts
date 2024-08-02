'use strict';
import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelizeConnection } from "../config/database";
import sequelize from "../config/database";

module.exports = (sequelize : Sequelize, DataTypes : any) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models : Model) {
      // define association here
    }
  }
  Tasks.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTERGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        references: {
          model: 'users', 
          key: 'id'
        }, 
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Tasks',
      timestamps: true, 
    }
  );
  return Tasks;
};