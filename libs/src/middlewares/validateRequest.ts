import type { RequestHandler } from "express";
import Joi from "joi";

export const validateRequest = (
  schema: Joi.ObjectSchema,
): RequestHandler => {
  return (req, res, next) => {
    const { error } = schema.validate(
      {
        body: req.body,
        params: req.params,
        query: req.query,
      },
      {
        abortEarly: false,
        allowUnknown: false,
      },
    );

    if (error) {
      res.status(400).json({
        message: "Validation failed",
        errors: error.details.map((detail) => detail.message),
      });
      return;
    }

    next();
  };
};