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
    }
}

export default listController