import { Model, DataTypes} from 'sequelize'
import  sequelize from '../config/database'
import { listsInterface } from '../interface/models';
import { User } from './user';
import { Task } from './task';

export const List = sequelize.define<listsInterface>(
    'List', 
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
      modelName: 'List',
      timestamps: true, 
    }
     
);

List.belongsTo(User, {
  foreignKey: 'user_id', 
  targetKey: 'id',
  as: 'user'
})

List.hasMany(Task, {
  foreignKey: 'list_id', 
  sourceKey: 'id', 
  as: 'task'
})
