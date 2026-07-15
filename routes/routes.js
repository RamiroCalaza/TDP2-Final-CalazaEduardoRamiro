import { Router } from "express";
import controller from "../Container/Container.js";

const routes = Router();

routes.post("/lecturas", controller.registrarLectura);
routes.get("/sensores", controller.getAll);

export default routes;
