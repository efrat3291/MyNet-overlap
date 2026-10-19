import { PostModel } from "../models/post.model.js";
import { createPostRepository } from "./post.repository.js";
import { createPostManager } from "./post.manager.js";
import { createPostController } from "./post.controller.js";
import { createPostRouter } from "./post.router.js";
import { createUserRpcClient } from "../post/user.rpc.client.js";

export const createPostService = () => {
  const postRepository = createPostRepository(PostModel);
  const userRpcClient = createUserRpcClient();

  const postManager = createPostManager(
    postRepository,
    userRpcClient,
  );

  const postController = createPostController(postManager);
  const postRouter = createPostRouter(postController);

  return postRouter;
};
