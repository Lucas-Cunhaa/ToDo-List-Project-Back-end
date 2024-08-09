import { DataTypes } from 'sequelize'
import  sequelize from '../config/database'
import { userInterface } from '../interface/models';
import { List } from './list';
export const User = sequelize.define<userInterface>(
    'User', 
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
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
        modelName: 'User',
        timestamps: true, 
      }
);
User.hasMany(List, {
  sourceKey: 'id', 
  foreignKey: 'user_id', 
  as: 'list'
})
