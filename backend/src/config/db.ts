import "dotenv/config";
import { connect, disconnect, set } from "mongoose";
import process from "node:process";

export const initDB = async (): Promise<void> => {
  set("strictQuery", true);
  
  await connect(process.env.MONGO_URI as string)
    .then(() => {
      console.log("[MongoDB] connected successfully");
    })
    .catch((error: unknown) => {
      console.error("[MongoDB] connection error:", error);
      process.exit(1);
    });
};

export const disconnectDB = async (): Promise<void> => {
  await disconnect()
    .then(() => {
      console.log("[MongoDB] disconnected");
    })
    .catch((error: unknown) => {
      console.error("[MongoDB] disconnection error:", error);
    });
};