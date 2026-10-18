import type { Model } from "mongoose";
import type {
  User,
} from "../../../../libs/src/types/user/user.type.js";

export const createUserRepository = (userModel: Model<User>) => {
  const createUser = (input: User) => userModel.create(input);

  const getAllUsers = () => userModel.find().exec();

  return {
    createUser,
    getAllUsers,
  };
};
