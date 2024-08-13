import { ListQueries } from "../../database/listQueries";
import { Request, Response } from "express";
import { ListData } from "../lib/listData";
import sequelize from "../../config/database";

const listQueries = new ListQueries(sequelize)

const listController = {
    createList: async (req : Request, res: Response)  => {
        try {
            const {title, description, user_id} = req.body 
            parseInt(user_id)
            const list = new ListData(title, description, user_id)
            const data = await listQueries.createList(list)
            res.status(200).send({message: "List Created"})
        } catch (error) {
            console.error("ERROR ON CREATE LIST CONTROLLER", error)
            res.status(404).send({error: "error on creating a list"})
        }
    },

    getUserLists: async (req: Request, res: Response) => {
        try {
            const user_id = parseInt(req.params.id) 
            const data = await listQueries.getAllLists(user_id)
            if(data){
                res.status(200).send(data)
            } else {
                res.status(204).send("None list found")
            }
        } catch(error) {
            console.error("ERROR ON GET USER LISTS", error)
        }
    },

    deleteList: async (req: Request, res: Response) => {
        try{
            const id = parseInt(req.params.id) 
            const data = await listQueries.deleteList(id)
            if (data) {
                res.status(200).send("List has been deleted")
            } else {
                res.status(400).send({ error: 'Error on delete List' });
            }
        } catch(error) {
            console.error("ERROR ON DELETE USER", error)
        }
    }
}

export default listController