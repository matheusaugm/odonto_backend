import {Router} from 'express'
import {getMenuController} from "../controllers/menuControllers.js";

const menuRouter = Router();

menuRouter.get('/getMenu', getMenuController);
export default menuRouter;