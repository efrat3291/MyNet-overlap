import express from "express";
import process from "node:process";
import { initDB } from "./db.js";
import { createPostService } from "./post/index.js";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("Content-Type:", req.headers["content-type"]);
  console.log("Request body:", req.body);
  next();
});

app.use("/posts", createPostService());

const start = async (): Promise<void> => {
  await initDB();

  const port = Number(process.env.PORT ?? 3001);

  app.listen(port, () => {
    console.log(`PostService listening on http://localhost:${port}`);
  });
};

start().catch((error: unknown) => {
  console.error("[PostService] Failed to start:", error);
  process.exitCode = 1;
});
