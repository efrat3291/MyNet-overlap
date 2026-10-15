import { Schema, model } from 'mongoose';
import type { User } from '../types/user.type';

const userSchema = new Schema<User>({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 2,
  },
  displayedName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
});

export const UserModel = model<User>("User", userSchema);