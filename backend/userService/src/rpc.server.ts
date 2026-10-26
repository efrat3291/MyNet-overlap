import jayson from "jayson/promise/index.js";
import { userManager } from "./user/user.manager.js";

export const rpcServer = new jayson.Server({
  getUserById: async (params: unknown) => {
    const userId = Array.isArray(params) ? params[0] : params;

    if (typeof userId !== "string") {
      throw new Error("RPC getUserById expected a string userId");
    }

    return userManager.getById(userId);
  },
});