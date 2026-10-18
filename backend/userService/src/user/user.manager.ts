import { createUserRepository } from "./user.repository.js";
import type { CreateUserInput } from "../../../../libs/src/types/user/user.type.js";

export const createUserManager = (
  userRepository: ReturnType<typeof createUserRepository>,
) => {
  const createUser = async (input: CreateUserInput) =>
    userRepository.createUser(input);

  const getAllUsers = async () => userRepository.getAllUsers();

  const userExists = (userId: string) => userRepository.userExists(userId);

  return {
    createUser,
    getAllUsers,
    userExists,
  };
};
