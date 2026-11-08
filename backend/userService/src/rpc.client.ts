import { config } from "./config.js";
import { postRPCService } from "@libs/rpc/services/post.RPCservice.js";

const postService = postRPCService(
    config.rpc.host,
    config.rpc.port,
);

export { postService };