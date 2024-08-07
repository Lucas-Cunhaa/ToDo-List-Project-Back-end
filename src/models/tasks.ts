import { Model, DataTypes} from 'sequelize'
import  sequelize from '../config/database'
import { tasksInterface } from '../interface/models';
import { List } from './lists';
export const Task = sequelize.define<tasksInterface>(
    'Tasks', 
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
      modelName: 'Task',
      timestamps: true, 
    }
     
);

Task.belongsTo(List, {
  foreignKey: 'list_id', 
  targetKey: 'id',
  as: 'lists'
})


