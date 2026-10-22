import { Router } from "express";
import { serviceInfo } from "@libs/server/serviceInfo.js";
import { postRouter } from "./post/post.router.js";

const appRouter: Router = Router();

appRouter.use(
  `${serviceInfo.post.api}/posts`,
  postRouter
);

export { appRouter };