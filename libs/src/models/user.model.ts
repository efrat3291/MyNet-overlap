import { Schema, model } from "mongoose";
import type { User } from "../types/user/user.type.js";

const userSchema = new Schema<User>({
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true,
    minlength: 1,
  },
  displayedName: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
});

export const UserModel = model<User>("User", userSchema);
