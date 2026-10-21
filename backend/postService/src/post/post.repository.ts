import { PostModel } from "@libs/models/post.model.js";
import type { Post } from "@libs/types/post/post.type.js";
import type { CreatePostPayload } from "@libs/types/post/postPayload.type.js";
import type { UpdatePostPayload } from "../types/postPayload.type.js";

export const postRepository = {
  create: async (post: CreatePostPayload): Promise<Post> => await PostModel.create(post),

  getAll: async (): Promise<Post[]> =>
    await PostModel.find().sort({ createdAt: -1 }).exec(),

  getById: async (id: string): Promise<Post> =>
    await PostModel.findById(id).orFail().exec(),

  update: async (id: string, post: UpdatePostPayload): Promise<Post> =>
    await PostModel.findByIdAndUpdate(id, post, {
      new: true,
      runValidators: true,
    })
      .orFail()
      .exec(),

  delete: async (id: string): Promise<Post> =>
    await PostModel.findByIdAndDelete(id).orFail().exec(),
};
