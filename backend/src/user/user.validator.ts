import type { RequestHandler } from "express";
import type { CreateUserInput } from "../../types/user.type.js";

export type CreateUserLocals = {
  createUserInput: CreateUserInput;
};

export const validateCreateUser: RequestHandler<
  Record<string, never>,
  unknown,
  unknown,
  Record<string, never>,
  CreateUserLocals
> = (req, res, next) => {
  const body: unknown = req.body;

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    res.status(400).json({
      message: "Request body must be a JSON object",
    });
    return;
  }

  const { username, displayedName } = body as Record<string, unknown>;

  if (typeof username !== "string" || typeof displayedName !== "string") {
    res.status(400).json({
      message: "username and displayedName must be strings",
    });
    return;
  }

  const normalizedUsername = username.trim();
  const normalizedDisplayedName = displayedName.trim();

  if (
    normalizedUsername.length < 3 ||
    normalizedUsername.length > 20 ||
    !/^[a-zA-Z0-9_]+$/.test(normalizedUsername)
  ) {
    res.status(400).json({
      message:
        "username must be 3-20 characters long and contain only English letters, numbers, and underscores",
    });
    return;
  }

  if (
    normalizedDisplayedName.length < 1 ||
    normalizedDisplayedName.length > 50
  ) {
    res.status(400).json({
      message: "displayedName must be between 1 and 50 characters long",
    });
    return;
  }

  res.locals.createUserInput = {
    username: normalizedUsername,
    displayedName: normalizedDisplayedName,
  };

  next();
};