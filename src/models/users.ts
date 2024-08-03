'use strict';
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

  class Users extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static associate(models : Model) {
      // define association here
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
      modelName: 'User',
      timestamps: true, 
    }
  );

  export default Users