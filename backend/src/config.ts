import "dotenv/config";

const { MONGO_URI, PORT } = process.env;

export const config = {
  db: {
    mongoUri: MONGO_URI,
  },
  server:{
    port: PORT || 3000,
  }
};
