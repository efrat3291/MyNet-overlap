import { UserModel } from "../models/user.js";
import { createUserRepository } from "./user.repository.js";
import { createUserManager } from "./user.manager.js";
import { createUserController } from "./user.controller.js";
import { createUserRouter } from "./user.router.js";

export const createUserService = () => {
    const userModel = UserModel;
    const userRepository = createUserRepository(userModel);
    const userManager = createUserManager(userRepository);
    const userController = createUserController(userManager);
    const userRouter = createUserRouter(userController);

    return userRouter;
};