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
        } catch (error) {
            console.error("ERROR ON CREATE TGASK QUERIE", error)
        }
    }
}
