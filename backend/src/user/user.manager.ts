import { createUserRepository } from "./user.repository.js";
import type { CreateUserInput } from "../../types/user.type.js";

export const createUserManager = (
    userRepository: ReturnType<typeof createUserRepository>,
) => {
    const createUser = async (input: CreateUserInput) =>
      userRepository.createUser(input);

    const getAllUsers = async () => userRepository.getAllUsers();

    return {
      createUser,
      getAllUsers,
    };
};