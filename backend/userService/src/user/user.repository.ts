import { UserModel } from "@libs/models/user.model.js";
import type { User } from "@libs/types/user/user.type.js";
import type { UpdateUserPayload } from "../types/userPayload.type.js";

export const userRepository = {
  create: async (user: User): Promise<User> => await UserModel.create(user),

  getAll: async (): Promise<User[]> => await UserModel.find().exec(),
  getById: async (id: string): Promise<User> =>
    await UserModel.findById(id).orFail().exec(),

  update: async (id: string, user: UpdateUserPayload): Promise<User> =>
    await UserModel.findByIdAndUpdate(id, user, {
      new: true,
      runValidators: true,
    })
      .orFail()
      .exec(),

  delete: async (id: string): Promise<User> =>
    await UserModel.findByIdAndDelete(id).orFail().exec(),
};
