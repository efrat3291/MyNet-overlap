import { Schema, model } from "mongoose";
import { isInteger } from "lodash/fp";
import type { Post } from "../types/post/post.type.js";

const POST_TEXT_MAX_LENGTH = 200;

const postSchema = new Schema<Post>(
  {
    postName: {
      type: String,
      required: true,
      index: true,
      trim: true,
      minlength: 1,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
      maxlength: POST_TEXT_MAX_LENGTH,
      minlength: 1,
    },
    media: {
      type: String,
      trim: true,
      validate: {
        validator: (value: string) => /^https?:\/\/.+/.test(value),
        message: "media must be a valid HTTP or HTTPS URL",
      },
    },
    likes: {
      type: Number,
      default: 0,
      min: 0,
      validate: {
        validator: isInteger,
        message: "Likes must be an integer",
      },
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  },
);

export const PostModel = model<Post>("Post", postSchema);
