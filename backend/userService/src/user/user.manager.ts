import { userRepository } from "./user.repository.js";
import type { User } from "../../../../libs/src/types/user/user.type.js";

export const userManager = {
  create: async (user: User): Promise<User> => {
    const input: User = {
      ...user,
      username: user.username.trim(),
      displayedName: user.displayedName.trim(),
    };

    return await userRepository.create(input);
  },

  getAll: userRepository.getAll,

  getById: userRepository.getById,
};
