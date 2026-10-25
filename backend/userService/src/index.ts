import express from "express";
import process from "node:process";
import { config } from "./config.js";
import { initDB } from "./db.js";
import { appRouter } from "./router.js";
import { rpcServer } from "./rpc.server.js";
import { startServer } from "@libs/startServer.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(appRouter);

app.use("/rpc/users", rpcServer.middleware());

startServer(
  app,
  config.server.port,
  initDB,
  "UserService",
).catch((error: unknown) => {
  console.error("[UserService] Failed to start:", error);
  process.exit(1);
});