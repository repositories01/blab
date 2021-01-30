import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";
import AuthController from "./controllers/AuthController";
import UpdateAvatar from './controllers/UpdateAvatar'
import authMiddleware from './middlewares/auth'
import multer from "multer";
import uploadConfig from "./config/upload";

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const authController = new AuthController();
const updateAvatar = new UpdateAvatar();
const upload = multer(uploadConfig);


routes.get("/classes", classesController.index);
routes.get("/connections", connectionsController.index);
routes.get("/login", authController.login);
routes.get('/index', authController.index)
routes.post("/signup", authController.signup);

routes.use(authMiddleware);
routes.patch('/avatar', upload.single('avatar'), updateAvatar.index)
routes.post("/classes", classesController.create);
routes.post("/connections", connectionsController.create);


export default routes;
