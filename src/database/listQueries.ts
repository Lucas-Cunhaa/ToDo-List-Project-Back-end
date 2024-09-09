import { Sequelize  } from "sequelize";
import { SequelizeConnection } from "../config/database";
import  { List }  from "../models/models";
import { ListData } from "../api/lib/listData";

export class ListQueries extends SequelizeConnection {
    constructor(sequelize : Sequelize) {
        super(sequelize) 
        this.syncDatabase(List)
    }

    async createList(list: ListData) {
        try {
            const data = await List.create({
                title: list.getTitle(), 
                description: list.getDescription(), 
                user_id: list.getUserId()
            })
            return data
        } catch (error) {
            console.error("ERROR ON CREATE LIST QUERIE", error)
        }
    }

    async getAllLists(user_id: number) {
        try {
            const data = await List.findAll({
                 where : {user_id: user_id}, 
                 attributes: ['id', 'title', 'description']
                })
            return data
        } catch (error) {
            console.error("ERROR ON GET ALL LISTS QUERIE", error)
        }
    }
    
    async deleteList(id: number) {
        try {
            const data = await List.destroy({where: { id: id } })
            return data
        } catch (error) {
            console.error("ERROR ON DELETE LIST QUERIE", error)
        }
    }
    
}