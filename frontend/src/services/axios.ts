import axios from "axios";
import { config } from "../config";

export const userAxios = axios.create({
  baseURL: config.services.user.baseURL,
});

export const contentAxios = axios.create({
  baseURL: config.services.content.baseURL,
});
