import { Router } from "express";
import { userController } from "./user.controller.js";
import { validateRequest } from "@libs/middlewares/validateRequest.js";
import {
  canCreate,
  canGetById,
  canGetAll,
} from "./user.validator.js";

const userRouter = Router();

userRouter.post(
  "/",
  validateRequest(canCreate),
  userController.create,
);

userRouter.get(
  "/",
  validateRequest(canGetAll),
  userController.getAll,
);

userRouter.get(
  "/:id",
  validateRequest(canGetById),
  userController.getById,
);

export { userRouter };
