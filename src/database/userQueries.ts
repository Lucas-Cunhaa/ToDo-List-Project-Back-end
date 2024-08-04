import Users from "../models/users"; 
import sequelize from "../config/database";
import { SequelizeConnection } from "../config/database";


export class UserQueries extends SequelizeConnection{
    constructor(sequelize : any ){
        super(sequelize)
        this.syncDatabase(Users) ;
    }

  
}