import { userRepository } from "./user.repository.js";
import type { User } from "@libs/types/user/user.type.js";

export const userManager = {
  create: userRepository.create,

  getAll: userRepository.getAll,

  getById: userRepository.getById,
};
