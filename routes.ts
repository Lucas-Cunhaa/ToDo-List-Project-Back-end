import Express  from "express";
import { TaskController  } from "./src/api/controllers/taskController";
import  listController   from "./src/api/controllers/listController"; 
import  userController  from "./src/api/controllers/userController";
const route = Express.Router()

route.post('/todo/register', userController.registerUser )
route.get('/todo/login', userController.loginUser)
route.delete('/todo/delete/:id', userController.deleteUser)

route.post('/todo/home', listController.createList)
route.get('/todo/home/:id', listController.getUserLists)
export default route

