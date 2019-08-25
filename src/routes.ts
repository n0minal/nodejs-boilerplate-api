import { Router, Request, Response, NextFunction } from "express";

//controllers
import UserController from "./app/controllers/user.controller";


//validators
import { createUserValidator } from "./app/validators/user.validator";

//middlewares
import validatorChecker from "./app/middlewares/validator-checker";
import validatePermission from "./app/middlewares/validate-permission";

const routes = Router();

/**
 * Application routes
 */
routes.post('/user', (req: Request, res: Response, next: NextFunction) => {
  validatePermission(req, res, next, 'can-create-user')
}, createUserValidator, validatorChecker, UserController.create);

export default routes;
