import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { passengerSchema } from "../schemas/passengers.schemas.js";
import { postPassenger } from "../controllers/passengers.controllers.js";

const passengersRouter = Router();

passengersRouter.post(
  "/passengers",
  validateSchema(passengerSchema),
  postPassenger
);

export default passengersRouter;
