import express from "express";
import process from "node:process";
import { initDB } from "./config/db";
import { config } from "./config";

const app = express();

app.use(express.json());

initDB()
  .then(() => {
    app.listen(config.server.port, () => {
      console.log(`[Server] is running on port ${config.server.port} 🚀`);
    });
  })
  .catch((error: unknown) => {
    console.error("[Server] Failed to start due to database error:", error);
    process.exit(1);
  });
