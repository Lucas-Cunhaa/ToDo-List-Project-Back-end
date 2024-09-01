import { Request, Response } from "express";
import { ListData } from "../lib/listData";
import { ListQueries } from "../../database/listQueries";
import { MESSAGES } from "../lib/messages";
import { checkData } from "../lib/checkData";
import sequelize from "../../config/database";

const listQueries = new ListQueries(sequelize)

const listController = {
    createList: async (req : Request, res: Response)  => {
        try {
            const {title, description, user_id} = req.body 
            parseInt(user_id)
            const list = new ListData(title, description, user_id)
            const data = await listQueries.createList(list)
            checkData(data, res, MESSAGES.CREATE_SUCESS, MESSAGES.CREATEL_FAIL)
            
        } catch (error) {
            console.error("ERROR ON CREATE LIST CONTROLLER", error)
            res.statusMessage = MESSAGES.CREATEL_FAIL
            res.status(404).end()
        }
    },

    getUserLists: async (req: Request, res: Response) => {
        try {
            const user_id = parseInt(req.query.id as string)

            if(isNaN(user_id)) {
                res.statusMessage = "Invalid user Id"
                return res.status(400).end()
            }

            const lists = await listQueries.getAllLists(user_id)
            checkData(lists, res, MESSAGES.LOADL_SUCESS, MESSAGES.LOADL_FAIL)
        } catch (error) {
            console.error("ERROR ON GET USER LISTS", error)
        }
    },

    deleteList: async (req: Request, res: Response) => {
        try{
            const id = parseInt(req.query.id as string)

            if(isNaN(id)) {
                res.statusMessage = "Invalid Id"
                return res.status(400).end()
            } 

            const data = await listQueries.deleteList(id)
            checkData(data, res, MESSAGES.DELETEL_SUCCESS, MESSAGES.DELETEL_FAIL)
        } catch (error) {
            console.error("ERROR ON DELETE USER", error)
        }
    }
}

export default listController