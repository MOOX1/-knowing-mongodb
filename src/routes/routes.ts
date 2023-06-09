import { Router } from "express";
import UserController from "../controllers/UserController";

const routes = Router();

routes.post("/user", UserController.create);
routes.get("/users", UserController.find);

export default routes;
