import type { Request, Response } from "express";
import { postManager } from "./post.manager.js";

export const postController = {
  create: async (req: Request, res: Response): Promise<void> => {
    res.status(201).json(await postManager.create(req.body));
  },

  getAll: async (_req: Request, res: Response): Promise<void> => {
    res.status(200).json(await postManager.getAll());
  },

  getById: async (req: Request, res: Response): Promise<void> => {
    res.status(200).json(await postManager.getById(req.params.id));
  },

  update: async (req: Request, res: Response): Promise<void> => {
    res.status(200).json(await postManager.update(req.params.id, req.body));
  },

  delete: async (req: Request, res: Response): Promise<void> => {
    const deletedPost = await postManager.delete(req.params.id);

    res.status(200).json({
      message: "Post deleted successfully",
      post: deletedPost,
    });
  },
};
