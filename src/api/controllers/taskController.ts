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
            const list_id = parseInt(req.query.id as string)

            if(isNaN(list_id)) {
                res.statusMessage = "Invalid task Id"
                return res.status(400).end()
            }

            const tasks = await taskQueries.getAllTasks(list_id)
            checkData(tasks, res, MESSAGES.CREATE_SUCESS, MESSAGES.LOADT_FAIL)
        } catch (error) {
            res.statusMessage = MESSAGES.LOADT_FAIL
            res.status(404).end()
            console.error("ERROR ON GET LIST TASKS", error)
        }
    } , 

    changeState: async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            const newState = req.body.state
            const data = await taskQueries.updateTask(id, newState)
            checkData(data, res, MESSAGES.EDITED_SUCESS, MESSAGES.EDITED_FAIL)
        } catch (error) {
            console.error("ERROR ON CHANGE STATE CONTROLLER", error)
        }
    },

    deleteTask: async (req: Request, res: Response) => {
       try {
            const id = parseInt(req.query.id as string)

            if(isNaN(id)) {
                res.statusMessage = "Invalid  Id"
                return res.status(400).end()
            }

           const data = await taskQueries.deleteTask(id)
           checkData(data, res, MESSAGES.DELETET_SUCCESS, MESSAGES.DELETET_FAIL)

       } catch (error) {
           console.error("ERROR ON DELETE TASK CONTROLLER", error)
       }
       
    }
}

export default taskController