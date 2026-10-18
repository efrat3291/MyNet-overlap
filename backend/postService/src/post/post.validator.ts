import type { Request, Response, NextFunction } from "express";
import { isValidObjectId } from "mongoose";

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const isValidMedia = (value: unknown): boolean => {
  if (value === undefined || value === null || value === "") {
    return true;
  }

  if (typeof value !== "string") {
    return false;
  }

  try {
    const url = new URL(value);

    return (
      (url.protocol === "http:" || url.protocol === "https:") &&
      url.hostname.length > 0
    );
  } catch {
    return false;
  }
};

export const validateCreatePost = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { postName, userId, text, media } = req.body;

  const isValid =
    isNonEmptyString(postName) &&
    isValidObjectId(userId) &&
    isNonEmptyString(text) &&
    text.trim().length <= 200 &&
    isValidMedia(media);

  if (!isValid) {
    res.status(400).json({
      message:
        "postName, valid userId and text (1-200 characters) are required; media must be a valid HTTP or HTTPS URL when provided",
    });
    return;
  }

  next();
};

export const validatePostId = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (!isValidObjectId(req.params.id)) {
    res.status(400).json({
      message: "id must be a valid post id",
    });
    return;
  }

  next();
};

export const validateUpdatePost = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { postName, text, media } = req.body;

  const hasPostName = postName !== undefined;
  const hasText = text !== undefined;
  const hasMedia = media !== undefined;

  const hasChanges = hasPostName || hasText || hasMedia;

  const isValid =
    hasChanges &&
    (!hasPostName || isNonEmptyString(postName)) &&
    (!hasText ||
      (isNonEmptyString(text) && text.trim().length <= 200)) &&
    (!hasMedia || isValidMedia(media));

  if (!isValid) {
    res.status(400).json({
      message:
        "Provide at least one valid field: postName, text (1-200 characters), or media (HTTP/HTTPS URL or null)",
    });
    return;
  }

  next();
};
