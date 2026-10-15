
import { Schema, model } from 'mongoose';
import type { User } from '../types/user.type';

const userSchema = new Schema<User>({
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true,
  },
  displayedName: {
    type: String,
    required: true,
    trim: true,
  },
});

export const UserModel = model<User>('User', userSchema);
