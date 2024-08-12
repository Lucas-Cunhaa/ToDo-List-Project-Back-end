import { UserQueries } from "../../database/userQueries";
import sequelize from "../../config/database";

const userQueries = new UserQueries(sequelize)

const UserController = {
    registerUser: async (req : any, res : any) => {
    try{
        const { name, email, password } = req.body 
        const emailExists = await userQueries.getUserByEmail(email)
        if (emailExists) {
            res.status(200).send("User alredy exists")
        } else {
            const data = await userQueries.createUser(name, email, password)
            res.status(200).send(data)
        }
    }catch (error) {
        console.error("ERROR ON CONTROLLER CREATE USER", error)
        return res.status(400).json({ error: 'Failed'})
    }
    }
}
    
export default UserController;
