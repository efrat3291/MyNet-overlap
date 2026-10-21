import { Router } from "express";
import { postController } from "./post.controller.js";
import { validateRequest } from "@libs/middlewares/validateRequest.js";
import {
  createPostSchema,
  postIdSchema,
  updatePostSchema,
} from "./post.validator.js";

export const createPostRouter = () => {
  const postRouter = Router();

  postRouter.post(
    "/",
    validateRequest(createPostSchema),
    postController.create,
  );

  postRouter.get("/", postController.getAll);

  postRouter.get(
    "/:id",
    validateRequest(postIdSchema),
    postController.getById,
  );

  postRouter.patch(
    "/:id",
    validateRequest(updatePostSchema),
    postController.update,
  );

  postRouter.delete(
    "/:id",
    validateRequest(postIdSchema),
    postController.delete,
  );

  return postRouter;
};