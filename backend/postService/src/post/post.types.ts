import type { Post } from "@libs/types/post/post.type.js";

export type CreatePostPayload = Pick<
  Post,
  "postName" | "userId" | "text" | "media"
>;

export type UpdatePostPayload = Partial<
  Pick<Post, "postName" | "text" | "media">
>;
