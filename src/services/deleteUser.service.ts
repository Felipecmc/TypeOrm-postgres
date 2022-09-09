import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const deleteUswerService = async (id: any) => {
    const userRepository =  AppDataSource.getRepository(User)

    const user = await userRepository.delete(id)
   
    if(user.affected === 0 ) {
        throw new Error("There's no user with this Id!")
    }

    return { 
        message: "User deleted successfully!"
    }
}

export default deleteUswerService