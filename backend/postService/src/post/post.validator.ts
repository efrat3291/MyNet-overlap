import Joi from "joi";
import { joiMongoId } from "@libs/joi/joiMongo.validate";
import { POST_TEXT_MAX_LENGTH } from "@libs/consts/post.consts.js";

export const canCreate = Joi.object({
  body: Joi.object({
    postName: Joi.string().trim().required(),
    userId: joiMongoId().required(),
    text: Joi.string().trim().min(1).max(POST_TEXT_MAX_LENGTH).required(),
    media: Joi.string()
      .uri({ scheme: ["http", "https"] })
      .allow("", null),
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

export const canUpdate = Joi.object({
  body: Joi.object({
    postName: Joi.string().trim(),
    text: Joi.string().trim().min(1).max(POST_TEXT_MAX_LENGTH),
    media: Joi.string()
      .uri({ scheme: ["http", "https"] }),
  })
    .min(1)
    .required(),

  params: Joi.object({
    id: joiMongoId().required(),
  }).required(),

  query: Joi.object(),
});

export const canDelete = Joi.object({
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
