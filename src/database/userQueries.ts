import Users from "../models/users"; 
import Lists from "../models/lists";
import { SequelizeConnection } from "../config/database";
import { models } from "../interface/models";

export class UserQueries extends SequelizeConnection{
    constructor(sequelize : any ){
        super(sequelize)
        this.syncDatabase(Users) ;
    }
    
    getUserByEmail(){

    }
    
    getUserByEmailAndPassword(){

    }   

    createUser(){

    }


  
}