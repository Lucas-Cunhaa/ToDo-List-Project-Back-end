import { Sequelize  } from "sequelize";
import { SequelizeConnection } from "../config/database";
import { Task } from "../models/models";
import { TaskData } from "../api/lib/taskData";

export class TaskQueries extends SequelizeConnection {
    constructor(sequelize: Sequelize) {
        super(sequelize)
        this.syncDatabase(Task)
    }

    async createTask(task: TaskData) {
        try {
            const data = await Task.create({
                title: task.getTitle(),
                description: task.getDescription(),
                state: task.getState(),
                list_id: task.getListId(),
                member_id: task.getMemberId(),
            })
            return data

        } catch (error) {
            console.error("ERROR ON CREATE TGASK QUERIE", error)
        }
    }
    async getAllTasks(list_id: number) {
        try {
            const data = await Task.findAll({
                 where: {list_id: list_id },  
                 attributes: ['id', 'title', 'description', 'state']
                })
            return data
        } catch (error) {
            console.error("ERROR ON GET ALL TASKS QUERIE", error)
        }
    }

    async updateTask(id: number, newState: string) {
        try {
            const change = await Task.update(
                {state: newState}, 
                {where: {id: id} },  
            )
            return change
            
        } catch (error) {
            console.error("ERROR ON UPDATE QUERIE TASK", error)
        }
    }

    async deleteTask(id: number) {
        const data = await Task.destroy(
            {where: {id: id} }
        )
        return data
    }
}
