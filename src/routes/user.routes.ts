import { Router } from 'express'
import createUserController from '../controllers/createUser.controller'
import deleteUserController from '../controllers/deleteUser.controller'
import listUserController from "../controllers/listUser.controller"
import listUserByIdController from '../controllers/listUserById.controller'
import updateUserController from '../controllers/updateUser.controller'
import verifyEmailMiddleware from "../middlewares/verifyEmail.middleware"
export const userRoutes = Router()

userRoutes.post("/",verifyEmailMiddleware, createUserController)
userRoutes.get("/", listUserController)
userRoutes.get("/:id", listUserByIdController)
userRoutes.patch("/:id", updateUserController)
userRoutes.delete("/:id", deleteUserController)