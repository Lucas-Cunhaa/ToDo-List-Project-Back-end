import Express  from "express";
import  taskController from "./src/api/controllers/taskController";
import  listController   from "./src/api/controllers/listController"; 
import  userController  from "./src/api/controllers/userController";
const route = Express.Router()

route.post('/todo/register', userController.registerUser )
route.get('/todo/login', userController.loginUser)
route.delete('/todo/delete/:id', userController.deleteUser)

route.post('/todo/home', listController.createList)
route.get('/todo/home/:id', listController.getUserLists)
route.delete('/todo/home/:id', listController.deleteList)

route.post('/todo/tasks', taskController.createTask)
route.get('/todo/tasks/:id', taskController.getListTasks)
route.put('/todo/tasks/:id', taskController.changeState)

export default route

