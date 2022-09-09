import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { hash } from "bcryptjs"
import {ICreateUser} from "../interfaces/createUser.interface"


const createUserService = async ({email, name, age, password}: ICreateUser) => {
        const userRepository =  AppDataSource.getRepository(User)

        if(!email||!name||!age||!password){
            throw new Error( "All the informations are required!")
        }

        const hashedPassword = await hash(password, 10)
        const created_at = new Date();
       

        const newUser = userRepository.create({
            email,
            name,
            age,
            password: hashedPassword,
            created_at,
        })

        await userRepository.save(newUser)


    
        return {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            age: newUser.age,
            created_at: newUser.created_at,
            updated_at: newUser.updated_at,
        }
}


export default createUserService