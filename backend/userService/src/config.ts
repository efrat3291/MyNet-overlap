import "dotenv/config";
import { serviceInfo } from "@libs/server/serviceInfo";

const { MONGO_URI } = process.env;

if (!MONGO_URI) {
  throw new Error("Missing MONGO_URI environment variable");
}

export const config = {
  db: {
    mongoUri: MONGO_URI,
  },
  server: {
    port: serviceInfo.user.local.port,
  },
};
