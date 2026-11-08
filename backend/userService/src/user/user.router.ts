import { Router } from "express";
import { userController } from "./user.controller.js";
import { validateRequest } from "@libs/middlewares/validateRequest.js";
import {
  canCreate,
  canGetById,
  canGetAll,
  canDeleteUserPosts,
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

userRouter.delete(
  "/:username/posts",
  validateRequest(canDeleteUserPosts),
  userController.deleteUserPosts,
);

console.log("DELETE USER POSTS ROUTE LOADED");

export { userRouter };
