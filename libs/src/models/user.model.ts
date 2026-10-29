import { Schema, model } from "mongoose";
import type { User } from "../types/user/user.type.js";
import {
  USER_NAME_MIN_LENGTH,
  DISPLAYED_NAME_MIN_LENGTH,
} from "../consts/user.consts.js";

const userSchema = new Schema<User>({
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true,
    minlength: USER_NAME_MIN_LENGTH,
  },
  displayedName: {
    type: String,
    required: true,
    trim: true,
    minlength: DISPLAYED_NAME_MIN_LENGTH,
  },
});

export const UserModel = model<User>("User", userSchema);
