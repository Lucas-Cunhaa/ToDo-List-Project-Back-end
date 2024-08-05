'use strict';
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import {ModelsInterface } from '../interface/models';
class Lists extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public user_id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: ModelsInterface) {
    Lists.belongsTo(models.Users, { 
      as: 'user',
      foreignKey: 'user_id'
    }), 
    Lists.hasMany(models.Tasks, {
      as: 'task', 
      foreignKey: 'list_id'
    })
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Lists',
    timestamps: true,
  }
);

export default Lists;
