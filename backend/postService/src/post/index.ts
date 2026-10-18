
import { PostModel } from "../models/post.model.js";

import { createPostRepository } from "./post.repository.js";
import { createPostManager } from "./post.manager.js";
import { createPostController } from "./post.controller.js";
import { createPostRouter } from "./post.router.js";

export const createPostService = () => {
  const postRepository = createPostRepository(PostModel);
  const postManager = createPostManager(postRepository);
  const postController = createPostController(postManager);
  const postRouter = createPostRouter(postController);

  return postRouter;
};
