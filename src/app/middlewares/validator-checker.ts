import { Response, Request, NextFunction } from "express";

import { validationResult } from "express-validator";
class ValidatorChecker {

  handle(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);

    if(!errors.isEmpty()) 
      return res.status(422).json(errors.array());
    
    next();
  }
}

export default new ValidatorChecker().handle;