import { Response, Request, NextFunction } from "express";
import _ from "lodash";
const camelize = require("camelcase-keys-recursive");

class ParamCamelizerMiddleware {

  
  parse(req: Request, res: Response, next: NextFunction) {
    req.body = camelize(req.body);
    req.query = camelize(req.query);
    next();
  }

}

export default new ParamCamelizerMiddleware().parse;