import { isNil } from "lodash/fp";
import { HTTP_STATUS } from "@libs/consts/http.consts.js";
import type { Post } from "@libs/types/post/post.type.js";
import type { CreatePostPayload } from "./post.types";
import { postRepository } from "./post.repository.js";
import { userService } from "../rpc.client.js";
import type { UpdatePostPayload } from "./post.types.js";

export const postManager = {
  create: async (post: CreatePostPayload): Promise<Post> => {
    const user = await userService.getUserById(post.userId);

    if (isNil(user)) {
      const error = new Error("User not found");
      Object.assign(error, { statusCode: HTTP_STATUS.NOT_FOUND });
      throw error;
    }

    return await postRepository.create(post);
  },

  getAll: postRepository.getAll,

  getById: postRepository.getById,

  update: async (
    id: string,
    post: UpdatePostPayload,
  ): Promise<Post> => {
    return await postRepository.update(id, post);
  },

  delete: postRepository.delete,
};
