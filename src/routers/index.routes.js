import { Router } from "express";
import citiesRouter from "./cities.routes.js";
import passengersRouter from "./passengers.routes.js";

const router = Router();

router.use(citiesRouter);
router.use(passengersRouter);

export default router;
