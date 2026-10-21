import express from "express";
import process from "node:process";
import { config } from "./config.js";
import { initDB } from "./db.js";
import { createUserRouter } from "./user/user.router.js";
import { createUserRpcServer } from "./user/user.rpc.server.js";
import { startServer } from "../../../libs/src/startServer.js";

const app = express();

app.use(express.json());

app.use("/users", createUserRouter());
//app.use("/rpc/users", createUserRpcServer);

startServer(
  app,
  config.server.port,
  initDB,
  "UserService",
).catch((error: unknown) => {
  console.error("[UserService] Failed to start:", error);
  process.exit(1);
});