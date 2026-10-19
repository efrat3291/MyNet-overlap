import { UserModel } from "../../../../libs/src/models/user.model.js";
import { createUserRepository } from "./user.repository.js";
import { createUserManager } from "./user.manager.js";
import { createUserController } from "./user.controller.js";
import { createUserRouter } from "./user.router.js";
import { createUserRpcServer } from "./user.rpc.server.js";

export const createUserService = () => {
  const userRepository = createUserRepository(UserModel);
  const userManager = createUserManager(userRepository);
  const userController = createUserController(userManager);

  const userRouter = createUserRouter(userController);
  const userRpcRouter = createUserRpcServer(userManager);

  return {
    userRouter,
    userRpcRouter,
  };
};
