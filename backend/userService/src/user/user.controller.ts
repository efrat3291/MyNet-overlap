import type { Request, Response } from "express";
import { userManager } from "./user.manager.js";
import type { User } from "@libs/types/user/user.type.js";

export const userController = {
  create: async (req: Request, res: Response): Promise<void> => {
    const input: User = {
      username: req.body.username,
      displayedName: req.body.displayedName,
    };

    res.status(201).json(await userManager.create(input));
  },

  getAll: async (_req: Request, res: Response): Promise<void> => {
    res.status(200).json(await userManager.getAll());
  },

  getById: async (
    req: Request<{ userId: string }>,
    res: Response,
  ): Promise<void> => {
    res.status(200).json(await userManager.getById(req.params.userId));
  },
};
