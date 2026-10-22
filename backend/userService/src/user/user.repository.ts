import { UserModel } from "@libs/models/user.model.js";
import type { User } from "@libs/types/user/user.type.js";

export const userRepository = {
  create: async (user: User): Promise<User> =>
    await UserModel.create(user),

  getAll: async (): Promise<User[]> =>
    await UserModel.find().exec(),

  getById: async (id: string): Promise<User> =>
    await UserModel.findById(id).orFail().exec(),
};
