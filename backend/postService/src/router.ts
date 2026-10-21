import { Router } from "express";
import { serviceInfo } from "@libs/serviceInfo.js";
import { createPostRouter } from "./post/post.router.js";

const appRouter: Router = Router();

appRouter.use(
  `${serviceInfo.content.api}/posts`,
  createPostRouter(),
);

export { appRouter };