import { createPostRepository } from "./post.repository.js";

export const createPostManager = (
  postRepository: ReturnType<typeof createPostRepository>,
) => {
  const createPost = async (
    input: Parameters<typeof postRepository.createPost>[0],
  ) => postRepository.createPost(input);

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
