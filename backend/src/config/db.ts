import "dotenv/config";
import { connect, disconnect } from "mongoose";
import process from "process";

export const initDB = async (): Promise<void> => {

  if (!process.env.MONGO_URI) {
    throw new Error("[MongoDB] MONGO_URI environment variable is missing");
  }

  await connect(process.env.MONGO_URI);
  console.log("[MongoDB] connected successfully");
};

export const disconnectDB = async (): Promise<void> => {
  await disconnect();
  console.log("[MongoDB] disconnected");
};
