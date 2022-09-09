import { Request, Response,NextFunction} from 'express';
import {AppDataSource} from "../data-source";
import {User} from "../entities/user.entity";

const verifyEmailMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRepository =  AppDataSource.getRepository(User)
    const email: string = req.body.email

    const users = await userRepository.find()

    const emailExists = users.find(u => u.email === email)

    if (!emailExists) {
        next()
    }else{
        return res.status(400).json({
            message: "Email already in use!",
        })
    }
}

export default verifyEmailMiddleware