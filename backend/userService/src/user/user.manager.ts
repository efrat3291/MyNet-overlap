import { createUserRepository } from "./user.repository.js";
import type { User } from "../../../../libs/src/types/user/user.type.js";

export const createUserManager = (
  userRepository: ReturnType<typeof createUserRepository>,
) => {
  const createUser = async (input: User) =>
    userRepository.createUser(input);

  const getAllUsers = async () => userRepository.getAllUsers();

  return {
    createUser,
    getAllUsers,
  };
};
