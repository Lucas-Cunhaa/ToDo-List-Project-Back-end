import Users from "../models/users";
import Lists from "../models/lists";
import Tasks from "../models/tasks";

export interface ModelsInterface {
    Users :  typeof Users; 
    Lists :  typeof Lists;
    Tasks :  typeof Tasks; 
}

export const models : ModelsInterface = {
    "Users" : Users ,
    "Lists" : Lists , 
    "Tasks" : Tasks ,
}
