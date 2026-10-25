import type { User } from "@libs/types/user/user.type.js";
import { userAxios } from "../axios";

export type CreateUserPayload = Pick<User, "username" | "displayedName">; 

export const userService = {
  createUser: async (payload: User): Promise<User> => {
    const response = await userAxios.post<User>("/users", payload);
    return response.data;
  },

  getUsers: async (): Promise<User[]> => {
    const response = await userAxios.get<User[]>("/users");

    return response.data;
  },
};
