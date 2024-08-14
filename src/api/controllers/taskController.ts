import { Request, Response } from "express";
import { TaskData } from "../lib/taskData";
import { TaskQueries } from "../../database/taskQueries";
import sequelize from "../../config/database";

const taskQueires = new TaskQueries(sequelize)

const taskController = {
    createTask: async (req: Request, res: Response) => {
        try {
            const {title, description, state, list_id, member_id} = req.body 
            parseInt(member_id) 
            parseInt(list_id)
            const task = new TaskData(title, description, state, list_id, member_id)
            await taskQueires.createTask(task)
            res.status(200).send("Task created")
        } catch (error) {
            console.error("ERROR ON CREATE TASK CONTROLLER", error)
            res.status(404).send({error: "error on creating a task"})
        }
    }
}

export default taskController