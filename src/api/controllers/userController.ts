import { UserQueries } from "../../database/userQueries";
import { Request, Response } from "express";
import sequelize from "../../config/database";

const userQueries = new UserQueries(sequelize)

const userController = {
    registerUser: async (req : Request, res : Response) => {
    try{
        const { name, email, password } = req.body 
        const emailExists = await userQueries.getUserByEmail(email)
        if (emailExists) {
            res.status(409).send({ error: 'User already exists' });
        } else {
            const data = await userQueries.createUser(name, email, password)
            res.status(200).send("Register sucefully")
        }
    }catch (error) {
        console.error("ERROR ON CONTROLLER CREATE USER", error)
        return res.status(400).json({ error: 'Failed'})
        }
    }, 
     loginUser: async (req: Request, res: Response) => {
        try{
            const {email, password} = req.body
            const data = await userQueries.getUserByEmailAndPassword(email, password)
            if (data) {
                res.status(200).send("Login sucefuly")
            } else {
                res.status(401).send({ error: 'Invalid credentials' });
            }
        } catch (error) {
            console.error("ERROR ON CONTROLLER LOGIN USER", error)
        }
    },
    deleteUser : async (req: Request, res: Response) => {
        try{
            const id = parseInt(req.params.id)
            const data = await userQueries.deleteUser(id)
            if (data) {
                res.status(200).send("User has been deleted")
            } else {
                res.status(400).send({ error: 'Error on delete User' });
            }
        } catch (error) {
            console.error("ERROR ON DELETE USER", error)
        }
    }
}
    
export default userController;
