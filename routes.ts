import Express  from "express";
import { TaskController  } from "./src/api/controllers/taskController";
import { ListController  } from "./src/api/controllers/listController"; 
import  UserController  from "./src/api/controllers/userController";
const route = Express.Router()

route.post('/todo/register', UserController.registerUser )
route.get('/todo/login', UserController.loginUser)
route.delete('/todo/delete/:id', UserController.deleteUser)
export default route

