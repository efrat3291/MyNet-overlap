import { serviceInfo } from "@libs/server/serviceInfo";

const { VITE_ENV } = import.meta.env;

export const config = {
  services: {
    user: {
      baseURL:
        VITE_ENV === "local"
          ? `http://localhost:${serviceInfo.user.local.port}${serviceInfo.user.api}`
          : serviceInfo.user.api,
    },
    post: {
      baseURL:
        VITE_ENV === "local"
          ? `http://localhost:${serviceInfo.post.local.port}${serviceInfo.post.api}`
          : serviceInfo.post.api,
    },
  },
};
