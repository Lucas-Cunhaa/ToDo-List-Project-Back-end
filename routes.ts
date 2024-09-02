import Express  from "express";
import  taskController from "./src/api/controllers/taskController";
import  listController   from "./src/api/controllers/listController"; 
import  userController  from "./src/api/controllers/userController";
const route = Express.Router()

route.post('/todo/register', userController.registerUser )
route.post('/todo/login', userController.loginUser)
route.delete('/todo/delete', userController.deleteUser)

route.post('/todo/home', listController.createList)
route.get('/todo/home', listController.getUserLists)
route.get('/todo/home/name', listController.getListName)
route.delete('/todo/home', listController.deleteList)

route.post('/todo/tasks', taskController.createTask)
route.get('/todo/tasks', taskController.getListTasks)
route.put('/todo/tasks', taskController.changeState)
route.delete('/todo/tasks', taskController.deleteTask)

export default route

