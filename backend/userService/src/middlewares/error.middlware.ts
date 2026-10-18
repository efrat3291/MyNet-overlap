
import type { ErrorRequestHandler } from "express";

export const errorMiddleware: ErrorRequestHandler = (
  error: unknown,
  _req,
  res,
  next,
) => {
  if (res.headersSent) {
    next(error);
    return;
  }

  if (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === 11000
  ) {
    res.status(409).json({
      message: "Username already exists",
    });
    return;
  }

  console.error("[Error Middleware]", error);

  res.status(500).json({
    message: "Internal server error",
  });
};
