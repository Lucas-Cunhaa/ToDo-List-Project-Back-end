import { Request, Response } from "express";
import { TaskData } from "../lib/taskData";
import { TaskQueries } from "../../database/taskQueries";
import sequelize from "../../config/database";

const taskQueries = new TaskQueries(sequelize)

const taskController = {
    createTask: async (req: Request, res: Response) => {
        try {
            const {title, description, state, list_id, member_id} = req.body 
            parseInt(member_id) 
            parseInt(list_id)
            const task = new TaskData(title, description, state, list_id, member_id)
            const data = await taskQueries.createTask(task)
            if (data) {
                res.status(200).send("Task created")
            } else {
                throw new Error()
            }
        } catch (error) {
            console.error("ERROR ON CREATE TASK CONTROLLER", error)
            res.status(404).send({error: "error on creating a task"})
        }
    }, 

    getListTasks: async (req: Request, res: Response) => {
        try {
            const list_id = parseInt(req.params.id)
            const tasks = await taskQueries.getAllTasks(list_id)
            if(tasks) {
                res.status(200).send(tasks)
            } else {
                res.status(204).send("None task found")
            }
        } catch (error) {
            res.status(404).send("Cannot get tasks")
            console.error("ERROR ON GET LIST TASKS", error)
        }
    } , 

    changeState: async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            const newState = req.body.state
            const data = await taskQueries.updateTask(id, newState)
            if(data) {
                res.status(200).send(data)
            } else {
                throw new Error()
            }
            
        } catch (error) {
            res.status(404).send(null)
        }
    }
}

export default taskController