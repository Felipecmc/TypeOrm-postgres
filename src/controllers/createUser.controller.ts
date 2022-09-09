import createUserService from "../services/createUser.service";
import { Request, Response } from 'express'
import {ICreateUser} from"../interfaces/createUser.interface"


const createUserController = async (req: Request, res: Response) => {
    try {
        const {email, name, age, password}: ICreateUser = req.body

        const user = await createUserService({email, name, age, password})

        return res.status(201).json(user)
    }catch (error){
        if(error instanceof Error){
            return res.status(400).json({error: error.message})
        }
    }
}


export default createUserController