import { Router } from "express";
import { serviceInfo } from "@libs/server/serviceInfo.js";
import { userRouter } from "./user/user.router.js";

const appRouter: Router = Router();

appRouter.use(
  `${serviceInfo.user.api}/users`,
  userRouter,
);

export { appRouter };
