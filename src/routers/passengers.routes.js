import { Router } from "express";
import { postCity } from "../controllers/cities.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { citySchema } from "../schemas/cities.schemas.js";
import { passengerSchema } from "../schemas/passengers.schemas.js";
import { postPassenger } from "../controllers/passengers.controllers.js";

const passengersRouter = Router();

passengersRouter.post(
  "/passengers",
  validateSchema(passengerSchema),
  postPassenger
);

export default passengersRouter;
