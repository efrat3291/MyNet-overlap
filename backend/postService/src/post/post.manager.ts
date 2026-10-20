import { isNil } from "lodash/fp";
import { HTTP_STATUS } from "../../../../libs/src/consts/http.consts.js";
import type { Post } from "../../../../libs/src/types/post/post.type.js";
import type { CreatePostPayload } from "../../../../libs/src/types/post/postPayload.type.js";

import { postRepository } from "./post.repository.js";
import { userRpcClient } from "./user.rpc.client.js";

import type { UpdatePostPayload } from "../types/postPayload.type.js";

export const postManager = {
  create: async (post: CreatePostPayload): Promise<Post> => {
    const input: CreatePostPayload = {
      ...post,
      postName: post.postName.trim(),
      text: post.text.trim(),
      ...(post.media !== undefined
        ? { media: post.media.trim() }
        : {}),
    };

    const user = await userRpcClient.getUserById(input.userId);

    if (isNil(user)) {
      const error = new Error("User not found");
      Object.assign(error, { statusCode: HTTP_STATUS.NOT_FOUND });
      throw error;
    }

    return await postRepository.create(input);
  },

  getAll: postRepository.getAll,

  getById: postRepository.getById,

  update: async (
    id: string,
    post: UpdatePostPayload,
  ): Promise<Post> => {
    const input: UpdatePostPayload = {
      ...(post.postName !== undefined
        ? { postName: post.postName.trim() }
        : {}),
      ...(post.text !== undefined
        ? { text: post.text.trim() }
        : {}),
      ...(post.media !== undefined
        ? { media: post.media.trim() }
        : {}),
    };

    return await postRepository.update(id, input);
  },

  delete: postRepository.delete,
};