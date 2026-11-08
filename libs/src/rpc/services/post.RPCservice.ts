import jayson from "jayson/promise/index.js";
import { rpcClientRequest } from "../rpc.functions.js";

export const postRPCService = (host: string, port: number) => {
    const postRPCClient = jayson.client.http({
        host,
        port,
        path: "/rpc/posts",
    });

    return {
        deletePostsByUserId: (userId: string) => 
            rpcClientRequest<number>(postRPCClient, "deletePostsByUserId", {
                userId,
            }),
    };
};