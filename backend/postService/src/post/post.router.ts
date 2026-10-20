import { Router } from "express";
import { postController } from "./post.controller.js";
import {
  validateCreatePost,
  validatePostId,
  validateUpdatePost,
} from "./post.validator.js";

const postRouter = Router();

postRouter.post("/", validateCreatePost, postController.create);
postRouter.get("/", postController.getAll);
postRouter.get("/:id", validatePostId, postController.getById);
postRouter.put(
  "/:id",
  validatePostId,
  validateUpdatePost,
  postController.update,
);
postRouter.delete("/:id", validatePostId, postController.delete);

export default postRouter;
