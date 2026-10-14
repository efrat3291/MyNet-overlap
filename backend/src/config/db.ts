import { connect, disconnect, set } from "mongoose";
import "dotenv/config";

const MONGO_URI = process.env.MONGO_URI;

export const initDB = async (): Promise<void> => {
  set("strictQuery", true);

  if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined in the environment variables");
  }

  await connect(MONGO_URI);
  console.log("[MongoDB] connected successfully");
};

export const disconnectDB = async (): Promise<void> => {
  await disconnect();
  console.log("[MongoDB] disconnected");
};