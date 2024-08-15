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
            res.status(404).send({error: "error on creating a list"})
        }
    },

    getUserLists: async (req: Request, res: Response) => {
        try {
            const user_id = parseInt(req.params.id) 
            const lists = await listQueries.getAllLists(user_id)
            if(lists){
                res.status(200).send(lists)
            } else {
                res.status(204).send(MESSAGES.LIST_UNFOUNDED)
            }
        } catch (error) {
            res.status(404).send(MESSAGES.LOADL_FAIL)
            console.error("ERROR ON GET USER LISTS", error)
        }
    },

    deleteList: async (req: Request, res: Response) => {
        try{
            const id = parseInt(req.params.id) 
            const data = await listQueries.deleteList(id)
            checkData(data, res, MESSAGES.DELETEL_SUCCESS, MESSAGES.DELETEL_FAIL)
        } catch (error) {
            console.error("ERROR ON DELETE USER", error)
        }
    }
}

export default listController