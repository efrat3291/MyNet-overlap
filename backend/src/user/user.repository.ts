import type { Model } from "mongoose";
import type { User, CreateUserInput } from "../../types/user.type.js";

export const createUserRepository = (userModel: Model<User>) => {
  const createUser = (input: CreateUserInput) => userModel.create(input);

  const getAllUsers = () => userModel.find().exec();

  return {
    createUser,
    getAllUsers,
  };
};
