import { Types } from 'mongoose';

export type Post = {
  _id: string;
  postName: string;
  userId: Types.ObjectId;
  text: string;
  media?: string;
  likes?: number;
  createdAt: Date;
};

export type CreatePostPayload = Pick<
  Post,
  "postName" | "userId" | "text" | "media"
>;

export type UpdatePostPayload = Partial<
  Pick<Post, "postName" | "text" | "media">
>;
