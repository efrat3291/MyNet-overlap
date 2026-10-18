import { Router } from "express";
import type { RequestHandler } from "express";
import { isValidObjectId } from "mongoose";
import type { createUserManager } from "./user.manager.js";

export const createUserRpcServer = (
  userManager: ReturnType<typeof createUserManager>,
) => {
  const userRpcRouter = Router();

  const getUserById: RequestHandler = (req, res, next) => {
    const { userId } = req.params;

    if (!isValidObjectId(userId)) {
      res.status(400).json({
        message: "Invalid user ID",
      });
      return;
    }

    return userManager
      .getUserById(userId)
      .then((user) => {
        if (!user) {
          res.status(404).json({
            message: "User not found",
          });
          return;
        }

        res.status(200).json(user);
      })
      .catch(next);
  };

  userRpcRouter.get("/:userId", getUserById);
  return userRpcRouter;
};
