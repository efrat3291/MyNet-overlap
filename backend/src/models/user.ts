
import { Schema, model } from 'mongoose';

export type User = {
  username: string;
  displayedName: string;
};

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
