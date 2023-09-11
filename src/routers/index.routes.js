import { Router } from "express";
import citiesRouter from "./cities.routes.js";
import passengersRouter from "./passengers.routes.js";
import flightsRouter from "./flights.routes.js";

const router = Router();

router.use(citiesRouter);
router.use(passengersRouter);
router.use(flightsRouter);

export default router;
