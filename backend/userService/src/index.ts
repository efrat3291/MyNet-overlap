import express from "express";
import process from "node:process";
import { initDB } from "./db";
import { config } from "./config";
import { createUserService } from "./user/index.js";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(express.json());

app.use(errorMiddleware);

const { userRouter, userRpcRouter } = createUserService();

app.use("/users", userRouter);
app.use("/rpc/users", userRpcRouter);

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