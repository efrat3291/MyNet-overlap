import { serviceInfo } from "@libs/server/serviceInfo";

export const config = {
  services: {
    user: {
      baseURL:
        serviceInfo.user.env === "local"
          ? `http://localhost:${serviceInfo.user.local.port}${serviceInfo.user.api}`
          : serviceInfo.user.api,
    },
    content: {
      baseURL:
        serviceInfo.post.env === "local"
          ? `http://localhost:${serviceInfo.post.local.port}${serviceInfo.post.api}`
          : serviceInfo.post.api,
    },
  },
};
