import Users from "../models/users"; 
import Lists from "../models/lists";
import sequelize from "../config/database";
import { SequelizeConnection } from "../config/database";

Users.associate( Lists )
Lists.associate( Users )
export class UserQueries extends SequelizeConnection{
    constructor(sequelize : any ){
        super(sequelize)
        this.syncDatabase(Users) ;
    }

  
}