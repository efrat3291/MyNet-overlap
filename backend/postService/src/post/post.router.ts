import { Router } from "express";
import { postController } from "./post.controller.js";
import { validateRequest } from "@libs/middlewares/validateRequest.js";
import {
  canCreate,
  canGetAll,
  canGetById,
  canUpdate,
  canDelete,
} from "./post.validator.js";

const postRouter = Router();

postRouter.post(
  "/",
  validateRequest(canCreate),
  postController.create,
);

postRouter.get(
  "/",
  validateRequest(canGetAll),
  postController.getAll,
);


postRouter.get(
  "/:id",
  validateRequest(canGetById),
  postController.getById,
);

postRouter.patch(
  "/:id",
  validateRequest(canUpdate),
  postController.update,
);

postRouter.delete(
  "/:id",
  validateRequest(canDelete),
  postController.delete,
);

export { postRouter };
