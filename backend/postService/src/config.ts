import "dotenv/config";
import { serviceInfo } from "@libs/server/serviceInfo.js";

const { MONGO_URI, RPC_HOSTNAME } = process.env;

if (!MONGO_URI) {
  throw new Error("Missing MONGO_URI environment variable");
}

if (!RPC_HOSTNAME) {
  throw new Error("Missing RPC_HOSTNAME environment variable");
}

export const config = {
  db: {
    mongoUri: MONGO_URI,
  },
  server: {
    port: serviceInfo.content.local.port,
  },
  rpc: {
    host: RPC_HOSTNAME,
    port: serviceInfo.user.local.port,
  },
};