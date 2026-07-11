import { Router } from "express";
import controller from "../Container/Container.js"

const routes= Router()

routes.get("/",controller.getAll)

export default routes


