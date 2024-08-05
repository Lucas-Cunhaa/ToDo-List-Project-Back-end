'use strict';
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import { ModelsInterface } from "../interface/models";

  class Users extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models: ModelsInterface) {
      Users.hasMany(models.Lists, {
        as: 'lists', 
        foreignKey : 'user_id'
      }) 
      Users.belongsTo(models.Tasks, {
        as: 'task', 
        foreignKey: 'user_id', 
      })
    }
  }
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
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
      modelName: 'Users',
      timestamps: true, 
    }
  );

  export default Users