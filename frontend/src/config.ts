import { serviceInfo } from "@libs/serviceInfo";

export const config = {
  services: {
    user: {
      baseURL: `${serviceInfo.user.env}${serviceInfo.user.local.port}${serviceInfo.user.api}`,
    },
    content: {
      baseURL: `${serviceInfo.content.env}${serviceInfo.content.local.port}${serviceInfo.content.api}`,
    },
  },
};