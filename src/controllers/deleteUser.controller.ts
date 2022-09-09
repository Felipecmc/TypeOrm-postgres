import { Request, Response } from 'express';
import deleteUserService from '../services/deleteUser.service';


const deleteUserController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const response = await deleteUserService(id)

        return res.status(200).json(response);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(404).json({ message: error.message});
        }
    }
}

export default deleteUserController;

