import type { Request, Response } from "express";
import { userManager } from "./user.manager.js";
import type { User } from "../../../../libs/src/types/user/user.type.js";
import { trim } from "lodash/fp";

export const userController = {
  create: async (req: Request, res: Response): Promise<void> => {
    const input: User = {
      username: trim(req.body.username),
      displayedName: trim(req.body.displayedName),
    };

    res.status(201).json(await userManager.createUser(input));
  },

  getAll: async (_req: Request, res: Response): Promise<void> => {
    res.status(200).json(await userManager.getAllUsers());
  },

  getById: async (req: Request, res: Response): Promise<void> => {
    const user = await userManager.getUserById(req.params.userId);

    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
      return;
    }

    res.status(200).json(user);
  },
};
