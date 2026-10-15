import type { Types } from "mongoose";

export type Post = {
  postName: string;
  userId: Types.ObjectId;
  text: string;
  media?: string;
  likes: number;
  createdAt: Date;
};

export type CreatePostInput = {
  postName: string;
  userId: string;
  text: string;
  media?: string;
};

export type UpdatePostInput = {
  postName?: string;
  text?: string;
  media?: string;
};
