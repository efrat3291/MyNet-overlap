import "dotenv/config";
import express from "express";
import { initDB } from "./config/db"; 
import process from "process";

const app = express();

app.use(express.json());

initDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`[Server] is running on port ${process.env.PORT || 3000} 🚀`);
    });
  })
  .catch((error: unknown) => {
    console.error("[Server] Failed to start due to database error:", error);
    process.exit(1);
  });