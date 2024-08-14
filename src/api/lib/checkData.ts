import { Response } from "express";

export function checkData(data: any, res: Response, message: string, errorMessage: string)  {
     if(data !== null && data !== undefined) {
        res.status(200).json(message)
     } else {
        res.status(400).json(errorMessage)
    } 
}