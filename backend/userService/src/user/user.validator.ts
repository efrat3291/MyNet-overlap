import Joi from "joi";
import { joiMongoId } from "@libs/joi/joiMongo.validate";
import {
  USER_NAME_MIN_LENGTH,
  DISPLAYED_NAME_MIN_LENGTH,
} from "@libs/consts/user.consts";

export const canCreate = Joi.object({
  body: Joi.object({
    username: Joi.string().trim().min(USER_NAME_MIN_LENGTH).required(),
    displayedName: Joi.string().trim().min(DISPLAYED_NAME_MIN_LENGTH).required(),
  }).required(),

  params: Joi.object(),
  query: Joi.object(),
});

export const canGetById = Joi.object({
  body: Joi.object(),

  params: Joi.object({
    id: joiMongoId().required(),
  }).required(),

  query: Joi.object(),
});

export const canGetAll = Joi.object({
  body: Joi.object(),
  params: Joi.object(),
  query: Joi.object(),
});
