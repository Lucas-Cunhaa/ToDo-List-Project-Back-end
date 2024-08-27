import { Request, Response } from "express";
import { UserData } from "../lib/userData";
import { UserQueries } from "../../database/userQueries";
import { MESSAGES } from "../lib/messages";
import { checkData } from "../lib/checkData";
import sequelize from "../../config/database";

const userQueries = new UserQueries(sequelize)

const userController = {
    registerUser: async (req : Request, res : Response) => {
    try {
        const { name, email, password } = req.body 
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const user = new UserData(name, email, password)
        const emailExists = await userQueries.getUserByEmail(email)

        if (emailExists) {
             return res.status(409).json({ error: MESSAGES.USER_EXISTS });
        } 
        
        const data = await userQueries.createUser(user)
        checkData(data, res, MESSAGES.REGISTER_SUCCESS, MESSAGES.REGISTER_FAIL)

    } catch (error) {
        console.error("ERROR ON CONTROLLER CREATE USER", error)
        res.status(400).json({ error: MESSAGES.REGISTER_FAIL})
        }
    }, 
     loginUser: async (req: Request, res: Response) => {
        try {
            console.log(req)
            const {email, password} = req.body
            const data = await userQueries.getUserByEmailAndPassword(email, password)
            checkData(data, res, MESSAGES.LOGIN_SUCCESS, MESSAGES.INVALID_CREDENTIALS)
        } catch (error) {
            console.error("ERROR ON CONTROLLER LOGIN USER", error)
        }
    },
    deleteUser : async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            const data = await userQueries.deleteUser(id)
            checkData(data, res, MESSAGES.DELETE_SUCCESS, MESSAGES.DELETE_FAIL)
        } catch (error) {
            console.error("ERROR ON DELETE USER", error)
        }
    }
}
    
export default userController;
