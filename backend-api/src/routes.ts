import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";
import LoginController from "./controllers/LoginController";

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const loginController = new LoginController();

routes.get("/classes", classesController.index);
routes.post("/classes", classesController.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

routes.get("/login", loginController.index);
export default routes;
