import { userRepository } from "./user.repository.js";
import type { User } from "@libs/types/user/user.type.js";

export const userManager = {
  create: async (user: User): Promise<User> => {
    return await userRepository.create(user);
  },

  getAll: userRepository.getAll,

  getById: userRepository.getById,
};
