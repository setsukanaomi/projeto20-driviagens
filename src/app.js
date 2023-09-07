import express from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routers/index.routes.js";
import errorHandler from "./middlewares/errorsHandler.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`API rodando na porta ${port}.`));
