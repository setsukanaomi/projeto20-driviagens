import Joi from "joi";

export const travelSchema = Joi.object({
  passengerId: Joi.number().integer().positive().required(),
  flightId: Joi.number().integer().positive().required(),
});
