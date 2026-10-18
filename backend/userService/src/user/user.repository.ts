import type { Model } from "mongoose";
import type {
  User,
  CreateUserInput,
} from "../../../../libs/src/types/user/user.type.js";

export const createUserRepository = (userModel: Model<User>) => {
  const createUser = (input: CreateUserInput) => userModel.create(input);

  const getAllUsers = () => userModel.find().exec();

  const userExists = async (userId: string): Promise<boolean> => {
    const user = await userModel.exists({ _id: userId });
    return user !== null;
  };

  return {
    createUser,
    getAllUsers,
    userExists,
  };
};
