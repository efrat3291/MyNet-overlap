import jayson from "jayson/promise/index.js";
import { rpcClientRequest } from "../rpc.functions.js";
import type { User } from "../../types/user/user.type.js";

type UserRPCService = {
  getUserById: (userId: string) => Promise<User | null>;
};

export const userRPCService = (
  host: string,
  port: number,
): UserRPCService => {
  const userRPCClient = jayson.Client.http({
    host,
    port,
    path: "/rpc/users",
  });

  return {
    getUserById: (userId: string)  : Promise <User> =>
      rpcClientRequest(userRPCClient, "getUserById", {
        userId,
      }),
  };
};
