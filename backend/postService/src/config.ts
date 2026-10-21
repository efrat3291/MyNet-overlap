import process from "node:process";
import "dotenv/config";

const { MONGO_URI, PORT, USER_SERVICE_URL } = process.env;

export const config = {
  db: {
    mongoUri: MONGO_URI,
  },
  server:{
    port:Number(PORT),
  },
  services: {
    userServiceUrl: USER_SERVICE_URL,
  },
};
