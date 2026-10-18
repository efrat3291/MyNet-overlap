import { connect } from "mongoose";
import { config } from "./config.js";

export const initDB = async (): Promise<void> => {
  if (!config.db.mongoUri) {
    throw new Error("[MongoDB] MONGO_URI environment variable is missing");
  }

  await connect(config.db.mongoUri);
  console.log("[MongoDB] connected successfully");
};


