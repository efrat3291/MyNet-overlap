import express from "express";
import process from "node:process";
import { initDB } from "./db.js";
import { config } from "./config.js";
import { createPostRouter } from "./post/post.router.js";
import { startServer } from "../../../libs/src/startServer.js";

const app = express();

app.use(express.json());

app.use("/posts", createPostRouter());

startServer(
  app,
  config.server.port,
  initDB,
  "ContentService",
).catch((error: unknown) => {
  console.error("[ContentService] Failed to start:", error);
  process.exit(1);
});
