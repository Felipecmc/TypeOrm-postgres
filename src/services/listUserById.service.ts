import { User } from '../entities/user.entity';
import {AppDataSource}from '../data-source';


const listUserByIdService = async (idUser:any) => {

    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    const user = users.find(user => user.id == idUser)

    if(!user){
        throw new Error("There are no user with this Id!")
    }

    return user
}


export default listUserByIdService;