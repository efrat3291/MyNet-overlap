import express from "express";
import { initDB } from "./config/db.js";
import { createUserService } from "./user/index.js";
import process from "node:process";

const app = express();

app.use(express.json());

app.use("/users", createUserService());

const handleListen = (): void => {
  console.log("Server listening on http://localhost:3000");
};

const start = async (): Promise<void> => {
  await initDB();
  app.listen(3000, handleListen);
};

const handleStartupError = (error: unknown): void => {
  console.error("[Server] Failed to start:", error);
  process.exitCode = 1;
};

start().catch(handleStartupError);