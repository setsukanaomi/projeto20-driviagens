import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { travelSchema } from "../schemas/travels.schemas.js";
import { postTravel } from "../controllers/travels.controllers.js";

const travelsRouter = Router();

travelsRouter.post("/travels", validateSchema(travelSchema), postTravel);

export default travelsRouter;
