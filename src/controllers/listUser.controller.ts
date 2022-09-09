import listUserService from '../services/listUser.service';
import { Request, Response } from 'express';

const listUserController = async (req: Request, res: Response) => {
   try {
        const users = await listUserService()

        return res.json(users)
   } catch (error) {
        if (error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

export default listUserController