import { User } from "../models/users";
import { SequelizeConnection } from "../config/database";

export class UserQueries extends SequelizeConnection{
    constructor(sequelize : any ){
        super(sequelize)
        this.syncDatabase(User) ;
    }
    
    async createUser(name: string, email : string, password : string) {

    }
    async getUserByEmail(email : string){
        try{
            const data = await User.findOne({ where: {email: email} });
            if (data) {
                console.log(data)
                return true
            } else {
                return false
            }
        } catch(error) {
            console.error(error)
        }
    }
    
    getUserByEmailAndPassword(){

    }   

   
  
}