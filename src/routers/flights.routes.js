import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { flightSchema } from "../schemas/flights.schemas.js";
import { postFlight } from "../controllers/flights.controllers.js";

const flightsRouter = Router();

flightsRouter.post("/flights", validateSchema(flightSchema), postFlight);

export default flightsRouter;
