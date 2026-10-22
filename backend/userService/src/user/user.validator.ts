import Joi from "joi";
import { joiMongoId } from "@libs/joi/joiMongo.validate";

export const canCreate = Joi.object({
  body: Joi.object({
    username: Joi.string().trim().min(1).required(),
    displayedName: Joi.string().trim().min(1).required(),
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
