import { createPostRepository } from "./post.repository.js";
import type { createUserRpcClient } from "../post/user.rpc.client.js";

export const createPostManager = (
  postRepository: ReturnType<typeof createPostRepository>,
  userRpcClient: ReturnType<typeof createUserRpcClient>,
) => {
  const createPost = async (
    input: Parameters<typeof postRepository.createPost>[0],
  ) => {
    const userExists = await userRpcClient.getUserById(input.userId);

    if (!userExists) {
      const error = new Error("User not found");
      Object.assign(error, { statusCode: 404 });
      throw error;
    }

    return postRepository.createPost(input);
  };

  const getAllPosts = async () => postRepository.getAllPosts();

  const getPostById = async (id: string) =>
    postRepository.getPostById(id);

  const updatePost = async (
    id: string,
    changes: Parameters<typeof postRepository.updatePost>[1],
  ) => postRepository.updatePost(id, changes);

  const deletePost = async (id: string) =>
    postRepository.deletePost(id);

  return {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
  };
};
