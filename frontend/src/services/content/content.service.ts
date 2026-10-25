import type {
  CreatePostPayload,
  UpdatePostPayload,
} from "@libs/types/post/postPayload.type.js";
import type { Post } from "@libs/types/post/post.type.js";
import { contentAxios } from "../axios";

export const contentService = {
  createPost: async (payload: CreatePostPayload): Promise<Post> => {
    const response = await contentAxios.post<Post>("/posts", payload);

    return response.data;
  },

  getPosts: async (): Promise<Post[]> => {
    const response = await contentAxios.get<Post[]>("/posts");

    return response.data;
  },

  getPostById: async (id: string): Promise<Post> => {
    const response = await contentAxios.get<Post>(`/posts/${id}`);

    return response.data;
  },

  updatePost: async (
    id: string,
    payload: UpdatePostPayload,
  ): Promise<Post> => {
    const response = await contentAxios.patch<Post>(`/posts/${id}`, payload);

    return response.data;
  },

  deletePost: async (id: string): Promise<Post> => {
    const response = await contentAxios.delete<Post>(`/posts/${id}`);

    return response.data;
  },
};
