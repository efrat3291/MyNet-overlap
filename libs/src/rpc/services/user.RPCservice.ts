import jayson from "jayson/promise/index.js";
import { rpcClientRequest } from "../rpc.functions.js";

export const userRPCService = (host: string, port: number) => {
  const userRPCClient = jayson.Client.http({
    host,
    port,
    path: "/rpc/users",
  });

  return {
    getUserById: (userId: string) =>
      rpcClientRequest(userRPCClient, "getUserById", {
        userId,
      }),
  };
};
