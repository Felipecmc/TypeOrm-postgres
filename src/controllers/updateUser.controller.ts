import { Request, Response } from 'express'
import {IUpdateUser} from "../interfaces/updateUser.interface"
import updateUserService  from "../services/updateUser.service"

const updateUserController = async (req:Request, res:Response) => {
    try {
        const user: IUpdateUser = req.body
        const id = req.params.id

        const response = await updateUserService(user, id)
        
        return res.status(200).json(response)
    } catch (error) {
        if (error instanceof Error){
            return res.status(404).json({message: error.message})
        }
    }
}

export default updateUserController