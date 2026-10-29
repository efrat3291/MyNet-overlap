import express from "express";
import process from "node:process";
import { initDB } from "./db.js";
import { config } from "./config.js";
import { appRouter } from "./router.js";
import cors from "cors";
import { startServer } from "@libs/server/startServer.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(appRouter);

startServer(
  app,
  config.server.port,
  initDB,
  "PostService",
).catch((error: unknown) => {
  console.error("[PostService] Failed to start:", error);
  process.exit(1);
});