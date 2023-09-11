import Joi from "joi";

export const flightSchema = Joi.object({
  origin: Joi.number().integer().positive().required(),
  destination: Joi.number().integer().positive().required(),
  date: Joi.string()
    .pattern(new RegExp(/^\d{2}-\d{2}-\d{4}$/))
    .required()
    .messages({
      "string.pattern.base": "Date format must be DD-MM-YYYY.",
    }),
});
