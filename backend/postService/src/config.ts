import "dotenv/config";
import process from "node:process";

const { MONGO_URI, PORT, USER_SERVICE_URL } = process.env;

export const config = {
  db: {
    mongoUri: MONGO_URI,
  },
  server:{
    port: PORT,
  },
  services: {
    userServiceUrl: USER_SERVICE_URL,
  },
};
