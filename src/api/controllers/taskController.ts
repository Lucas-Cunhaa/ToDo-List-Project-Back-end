import { Request, Response } from "express";
import { TaskData } from "../lib/taskData";
import { TaskQueries } from "../../database/taskQueries";
import { MESSAGES } from "../lib/messages";
import { checkData } from "../lib/checkData";
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
            checkData(data, res, MESSAGES.CREATE_SUCESS, MESSAGES.CREATEC_FAIL)
        } catch (error) {
            console.error("ERROR ON CREATE TASK CONTROLLER", error)
        }
    }, 

    getListTasks: async (req: Request, res: Response) => {
        try {
            const list_id = parseInt(req.params.id)
            const tasks = await taskQueries.getAllTasks(list_id)
            if(tasks) {
                res.status(200).send(tasks)
            } else {
                res.status(204).send(MESSAGES.TASK_UNFOUNDED)
            }
        } catch (error) {
            res.status(404).send(MESSAGES.LOADT_FAIL)
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