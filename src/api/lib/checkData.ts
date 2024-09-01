import { Response } from "express";

export function checkData(dataResponse: any, res: Response, message: string, errorMessage: string)  {
     if(dataResponse !== null && dataResponse !== undefined) {
         res.status(200).json({
            data: {
                dataResponse : dataResponse, 
                message: message
            }
        })
     } else {
         res.statusMessage = errorMessage
         res.status(400).end()
    } 
} 