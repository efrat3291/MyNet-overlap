import type { RequestHandler } from "express";
import type { createUserManager } from "./user.manager.js";
import type { User } from "../../../../libs/src/types/user/user.type.js";

export const createUserController = (
  userManager: ReturnType<typeof createUserManager>,
) => {
  const createUser: RequestHandler = (req, res, next) => {
    const input: User = {
      username: req.body.username.trim(),
      displayedName: req.body.displayedName.trim(),
    };

    return userManager
      .createUser(input)
      .then((user) => {
        res.status(201).json(user);
      })
      .catch(next);
  };

  const getAllUsers: RequestHandler = (req, res, next) => {
    return userManager
      .getAllUsers()
      .then((users) => {
        res.status(200).json(users);
      })
      .catch(next);
  };

  const getUserById: RequestHandler = (req, res, next) => {
  const { userId } = req.params;

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

  return {
    createUser,
    getAllUsers,
    getUserById,
  };
};
