import { userRepository } from "./user.repository.js";
import  { postService } from "../rpc.client.js"

export const userManager = {
  create: userRepository.create,

  getAll: userRepository.getAll,

  getById: userRepository.getById,

  getByUserName: userRepository.getByUserName,

  deleteUserPosts: async (username: string): Promise<number> => {
    const user = await userRepository.getByUserName(username);

    return await postService.deletePostsByUserId(String(user._id));
  },
};
