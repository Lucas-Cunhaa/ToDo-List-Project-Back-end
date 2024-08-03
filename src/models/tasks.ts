'use strict';
import { Model, DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/database";

  class Tasks extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public list_id!: number;
    public member_id!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

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
      list_id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'lists', 
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      member_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users', 
          key: 'id'
        }, 
        onDelete: 'CASCADE'
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
      modelName: 'Tasks',
      timestamps: true, 
    }
  );

export default Tasks