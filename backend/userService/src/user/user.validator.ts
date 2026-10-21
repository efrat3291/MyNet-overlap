import Joi from "joi";
import { joiMongoId } from "@libs/joi/joiMongo.validate";

export const createUserSchema = Joi.object({
  body: Joi.object({
    username: Joi.string().trim().min(2).required(),
    displayedName: Joi.string().trim().min(2).required(),
  }).required(),

  params: Joi.object(),
  query: Joi.object(),
});

export const getUserByIdSchema = Joi.object({
  body: Joi.object().required(),

  params: Joi.object({
    userId: joiMongoId().required(),
  }).required(),

  query: Joi.object().required(),
});
