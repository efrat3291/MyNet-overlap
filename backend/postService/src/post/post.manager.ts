import { createPostRepository } from "./post.repository.js";
import type { createUserRpcClient } from "../post/user.rpc.client.js";
import { isNil } from "lodash/fp";
import { HTTP_STATUS } from "../../../../libs/src/consts/http.consts.js";

export const createPostManager = (
  postRepository: ReturnType<typeof createPostRepository>,
  userRpcClient: ReturnType<typeof createUserRpcClient>,
) => {
  const createPost = async (
    input: Parameters<typeof postRepository.createPost>[0],
  ) => {
    const user = await userRpcClient.getUserById(input.userId);

    if (isNil(user)) {
      const error = new Error("User not found");
      Object.assign(error, { statusCode: HTTP_STATUS.NOT_FOUND });
      throw error;
    }

    return postRepository.createPost(input);
  };

  const getAllPosts = () => postRepository.getAllPosts();

  const getPostById = async (id: string) => postRepository.getPostById(id);

  const updatePost = async (
    id: string,
    changes: Parameters<typeof postRepository.updatePost>[1],
  ) => postRepository.updatePost(id, changes);

  const deletePost = async (id: string) => postRepository.deletePost(id);

  return {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
  };
};
