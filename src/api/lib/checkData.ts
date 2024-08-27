import { Response } from "express";

export function checkData(data: any, res: Response, message: string, errorMessage: string)  {
     if(data !== null && data !== undefined) {
         res.status(200).json({message: message})
     } else {
         res.statusMessage = errorMessage
         res.status(400).end()
    } 
}