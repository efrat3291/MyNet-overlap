import "dotenv/config";
import process from "node:process";

const { MONGO_URI, PORT } = process.env;

export const config = {
  db: {
    mongoUri: MONGO_URI,
  },
  server:{
    port: PORT,
  }
};
