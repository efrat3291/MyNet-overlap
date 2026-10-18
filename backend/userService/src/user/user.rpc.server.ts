import { Router } from "express";
import type { createUserManager } from "./user.manager.js";

export const createUserRpcServer = (
  userManager: ReturnType<typeof createUserManager>,
) => {
  const router = Router();

  router.post("/", async (req, res) => {
    try {
      const body: unknown = req.body;

      if (
        typeof body !== "object" ||
        body === null ||
        Array.isArray(body)
      ) {
        res.status(400).json({ message: "Invalid RPC request" });
        return;
      }

      const { method, params } = body as {
        method?: unknown;
        params?: unknown;
      };

      if (method !== "user.exists") {
        res.status(400).json({ message: "Unknown RPC method" });
        return;
      }

      if (
        typeof params !== "object" ||
        params === null ||
        !("userId" in params) ||
        typeof params.userId !== "string"
      ) {
        res.status(400).json({ message: "Invalid userId" });
        return;
      }

      const exists = await userManager.userExists(params.userId);

      res.status(200).json({ exists });
    } catch (error) {
      console.error("[User RPC]", error);
      res.status(500).json({ message: "RPC request failed" });
    }
  });

  return router;
};
