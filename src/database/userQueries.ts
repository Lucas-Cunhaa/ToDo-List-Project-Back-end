import { Sequelize  } from "sequelize";
import { SequelizeConnection } from "../config/database";
import  { User }  from "../models/models";
import { UserData } from "../api/lib/userData";

export class UserQueries extends SequelizeConnection{
    constructor(sequelize : Sequelize){
        super(sequelize)
        this.syncDatabase(User) ;
    }

    async createUser(user : UserData) {
        try{
            const data = await User.create( {
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            }); 
            console.log(data, "Created")
            return data
        } catch (error) {
            console.error("ERROR ON CREATE USER", error)
        } 
    }
    async getUserByEmail(email : string){
        try{
            const data = await User.findOne({ where: {email: email} });
            return data
        } catch (error) {
            console.error("ERROR ON getUserByEmail", error)
        }
    }
    
   async getUserByEmailAndPassword(email: string, password: string){
        try {
            const data = await User.findOne({
                where: {email : email, password : password}
            })
             return data
        } catch (error) {
            console.error("ERROR ON getUserByEmailAndPassword", error)
        }
    }
    
    async deleteUser(id: number) {
        try {   
            const data = await User.destroy({ where: {id: id } })
            return data
        } catch (error) {
            console.error("ERROR ON DELETE USER", error )
        }
    }
}