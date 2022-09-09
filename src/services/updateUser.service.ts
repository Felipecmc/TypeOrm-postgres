import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import {IUpdateUser} from "../interfaces/updateUser.interface"

const updateUserService = async (user: IUpdateUser, id: any) => {
    const userRepository =  AppDataSource.getRepository(User)

    const userToUpdate = await userRepository.findOne({
        where: { 
            id: id
        }
    })
   
    if(!userToUpdate){
        throw new Error("there is no user with this Id!")
    }

    if(!user.email && !user.password && !user.name && !user.age){
        throw new Error("Can't update without new data!")
    }else{
        userToUpdate.email = user.email || userToUpdate.email
        userToUpdate.name = user.name || userToUpdate.name
        userToUpdate.password = user.password || userToUpdate.password
        userToUpdate.age = user.age || userToUpdate.age

        await userRepository.save(userToUpdate)


        return {
            userUpdated: {
                id: userToUpdate.id,
                name: userToUpdate.name,
                email: userToUpdate.email,
                age: userToUpdate.age,
                created_at: userToUpdate.created_at,
                updated_at: userToUpdate.updated_at,
            },
            message: "User Update Successfully!"
        }
    }
}

export default updateUserService
