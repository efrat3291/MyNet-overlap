import { Router } from "express";
import { serviceInfo } from "@libs/serviceInfo.js";
import { createUserRouter } from "./user/user.router.js";

const appRouter: Router = Router();

appRouter.use(
  `${serviceInfo.user.api}/users`,
  createUserRouter(),
);

export { appRouter };