import { Router } from "express";
import { userRouter } from "./user/user.router.js";
import { serviceInfo } from "@libs/server/serviceInfo.js";

const appRouter: Router = Router();

appRouter.use(`${serviceInfo.user.api}/users`, userRouter);

export { appRouter };
