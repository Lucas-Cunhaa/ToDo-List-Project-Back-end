import  { List }  from "../models/models";
import { SequelizeConnection } from "../config/database";
import { ListData } from "../api/lib/listData";
export class ListQueries extends SequelizeConnection {
    constructor(sequelize :any) {
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
        } catch(error) {
            console.error("ERROR ON CREATE LIST QUERIE", error)
        }
    }
    async getAllLists(user_id: number) {
        try {
            const data = await List.findAll({ where : {user_id: user_id} })
            return data
        } catch(error) {
            console.error("ERROR ON GET ALL LISTS QUERIE", error)
        }
    }
    async deleteList(id: number, user_id: number) {

    }
}