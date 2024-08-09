import { Model } from "sequelize";

export interface userInterface extends Model {
    id: number; 
    name: string; 
    email: string; 
    password: string; 
    createdAt: Date; 
    updatedAt: Date; 
}

export interface listsInterface extends Model {
    id: number; 
    title: string; 
    description: string; 
    user_id: number; 
    createdAt: Date; 
    updatedAt: Date; 
}

export interface tasksInterface extends Model {
    id: number; 
    title: string; 
    description: string; 
    lists_id : number
    createdAt: Date; 
    updatedAt: Date; 
}