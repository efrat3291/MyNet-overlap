import { Schema, model } from 'mongoose';
import type { Post } from '../types/post.type.js';
import { POST_TEXT_MAX_LENGTH } from '../constants/post.consts.js';
import { isInteger } from 'lodash/fp';

const postSchema = new Schema<Post>({
  postName: {
    type: String,
    required: true,
    index: true,
    trim: true,
    minlength: 1,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  text: {
    type: String,
    required: true,
    maxlength: POST_TEXT_MAX_LENGTH,
  },
  media: {
  type: String,
  validate: {
    validator: (value: string | undefined) => {
      if (value === undefined) return true;

      try {
        const url = new URL(value);
        return url.protocol === 'http:' || url.protocol === 'https:';
      } catch {
        return false;
      }
    },
    message: 'Media must be a valid HTTP or HTTPS URL',
  },
},
  likes: {
    type: Number,
    default: 0,
    min: 0,
    validate: {
      validator: isInteger,
      message: 'Likes must be an integer',
    },
  },
}, {
  timestamps: {
    createdAt: true,
    updatedAt: false,
  },
});

export const PostModel = model<Post>('Post', postSchema);