import "dotenv/config";
import express from "express";
import { initDB } from "./config/db"; 
import process from "process";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


initDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`[Server] is running on port ${PORT} 🚀`);
    });
  })
  .catch((error: unknown) => {
    console.error("[Server] Failed to start due to database error:", error);
    process.exit(1);
  });