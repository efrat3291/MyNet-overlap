import type { ParamsDictionary, RequestHandler } from "express-serve-static-core";
import type { ParsedQs } from "qs";
import type { createUserManager } from "./user.manager.js";
import type { CreateUserLocals } from "./user.validator.js";

export const createUserController = (
    userManager: ReturnType<typeof createUserManager>,
) => {
    const createUser: RequestHandler<
      ParamsDictionary,
      unknown,
      unknown,
      ParsedQs,
      CreateUserLocals
    > = async (_req, res) => {
      const user = await userManager.createUser(res.locals.createUserInput);
      res.status(201).json(user);
    };

    const getAllUsers: RequestHandler = async (_req, res) => {
      const users = await userManager.getAllUsers();
      res.status(200).json(users);
    };

    return {
      createUser,
      getAllUsers,
    };
};