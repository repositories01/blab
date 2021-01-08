import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";
import AuthController from "./controllers/AuthController";
import UpdateAvatar from './controllers/UpdateAvatar'
const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const authController = new AuthController();
const updateAvatar = new UpdateAvatar();



routes.get("/classes", classesController.index);
routes.post("/classes", classesController.create);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);


routes.get("/login", authController.login);
routes.post("/signup", authController.signup);
routes.get('/index', authController.index);

routes.patch('/avatar', updateAvatar.index)


export default routes;
