import  { User }  from "../models/models";
import { SequelizeConnection } from "../config/database";


export class UserQueries extends SequelizeConnection{
    constructor(sequelize : any ){
        super(sequelize)
        this.syncDatabase(User) ;
    }

    async createUser(name: string, email : string, password : string) {
        try{
            const data = await User.create( {
                name: name,
                email: email,
                password: password
            }); 
            console.log(data, "Created")
        } catch (error) {
            console.error("ERROR ON CREATE USER", error)
        } 
    }
    async getUserByEmail(email : string){
        try{
            const data = await User.findOne({ where: {email: email} });
            return data
        } catch(error) {
            console.error("ERROR ON getUserByEmail", error)
        }
    }
    
   async getUserByEmailAndPassword(email: string, password: string){
        try {
            const data = await User.findOne({
                where: {email : email, password : password}
            })
             return data
        } catch(error) {
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