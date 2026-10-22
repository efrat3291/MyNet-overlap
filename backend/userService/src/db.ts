import { connectDB } from "@libs/server/db.js";
import { config } from "./config.js";

export const initDB = async (): Promise<void> => {
  if (!config.db.mongoUri) {
    throw new Error(
      "[MongoDB] MONGO_URI environment variable is missing",
    );
  }

  await connectDB(config.db.mongoUri);
};
