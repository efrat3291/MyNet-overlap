import { Router } from "express";
import { userController } from "./user.controller.js";
import { validateRequest } from "@libs/middlewares/validateRequest.js";
import {
  createUserSchema,
  getUserByIdSchema,
} from "./user.validator.js";

export const createUserRouter = () => {
  const userRouter = Router();

  userRouter.post(
    "/",
    validateRequest(createUserSchema),
    userController.create,
  );

  userRouter.get("/", userController.getAll);

  userRouter.get(
    "/:userId",
    validateRequest(getUserByIdSchema),
    userController.getById,
  );

  return userRouter;
};
