import { Request, Response } from 'express';
import listUserByIdService from "../services/listUserById.service"

const listUserByIdController = async (req:Request, res:Response) => {
    try {
        const {id}:any = req.params
      
        const user = await listUserByIdService(id)

        return res.status(200).json(user)
    }catch(err) {
        if(err instanceof Error) {
            res.status(400).json({message: err.message})
        }
    }
}

export default listUserByIdController