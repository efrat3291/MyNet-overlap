import type { Model, Types } from "mongoose";
import type { Post } from "../../../../libs/src/types/post/post.type.js";

export const createPostRepository = (postModel: Model<Post>) => {
  const createPost = (input: Post) => postModel.create(input);

  const getAllPosts = () =>
    postModel.find().sort({ createdAt: -1 }).exec();

  const getPostById = (id: string) =>
    postModel.findById(id).exec();

  const updatePost = (
    id: string,
    changes: Partial<Pick<Post, "postName" | "text" | "media">>,
  ) =>
    postModel
      .findByIdAndUpdate(id, changes, {
        new: true,
        runValidators: true,
      })
      .exec();

  const deletePost = (id: string) =>
    postModel.findByIdAndDelete(id).exec();

  return {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
  };
};
