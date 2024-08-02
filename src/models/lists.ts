'use strict';
import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelizeConnection } from "../config/database";
import sequelize from "../config/database";

module.exports = (sequelize : Sequelize, DataTypes : any) => {
  class Lists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models : Model) {
      // define association here
    }
  }
  Lists.init(
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
      list_id: {
        type: DataTypes.INTERGER,
        allowNull: false,
        references: {
          model: 'lists', 
          key: 'id'
        }, 
      },
     member_id: {
        type: DataTypes.INTERGER,
        allowNull: false,
        references: {
          model: 'users', 
          key: 'id'
        }, 
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Lists',
      timestamps: true, 
    }
  );
  return Lists;
};