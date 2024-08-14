import { DataTypes } from 'sequelize'
import  sequelize from '../config/database'

export const User = sequelize.define(
  'user', 
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
        unique: true
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
 export const Task = sequelize.define(
    'task', 
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
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      } ,
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
        allowNull: true,
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

export const List = sequelize.define(
  'list', 
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
User.hasMany(List, {
  sourceKey: 'id', 
  foreignKey: 'user_id', 
  as: 'list'
})
User.hasMany(Task, {
  sourceKey:'id', 
  foreignKey:'user_id', 
  as: 'task'
})
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

Task.belongsTo(List, {
  foreignKey: 'list_id', 
  targetKey: 'id',
  as: 'list'
})
Task.belongsTo(User, {
  foreignKey: 'user_id', 
  targetKey: 'id',
  as: 'user'
})




