import Joi from "joi";
import { joiMongoId } from "../../../../libs/src/joi/joiMongo.validate";

export const createPostSchema = Joi.object({
  body: Joi.object({
    postName: Joi.string().trim().required(),
    userId: joiMongoId().required(),
    text: Joi.string().trim().min(1).max(200).required(),
    media: Joi.string()
      .uri({ scheme: ["http", "https"] })
      .allow("", null)
      .optional(),
  }).required(),

  params: Joi.object().required(),
  query: Joi.object().required(),
});

export const postIdSchema = Joi.object({
  body: Joi.object().required(),

  params: Joi.object({
    id: joiMongoId().required(),
  }).required(),

  query: Joi.object().required(),
});

export const updatePostSchema = Joi.object({
  body: Joi.object({
    postName: Joi.string().trim().required(),
    text: Joi.string().trim().min(1).max(200).required(),
    media: Joi.string()
      .uri({ scheme: ["http", "https"] })
      .allow("", null)
      .optional(),
  })
    .min(1)
    .required(),

  params: Joi.object({
    id: joiMongoId().required(),
  }).required(),

  query: Joi.object().required(),
});
