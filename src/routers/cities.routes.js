import { Router } from "express";
import { postCity } from "../controllers/cities.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { citySchema } from "../schemas/cities.schemas.js";

const citiesRouter = Router();

citiesRouter.post("/cities", validateSchema(citySchema), postCity);

export default citiesRouter;
