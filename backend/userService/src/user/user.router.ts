import { Router } from "express";
import { userController } from "./user.controller.js";
import {
  validateCreateUser,
  validateGetUserById,
} from "./user.validator.js";

const userRouter = Router();

userRouter.post("/", validateCreateUser, userController.create);
userRouter.get("/", userController.getAll);
userRouter.get(
  "/:userId",
  validateGetUserById,
  userController.getById,
);

export default userRouter;
