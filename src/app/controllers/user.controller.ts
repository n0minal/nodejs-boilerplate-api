import { Request, Response } from "express";

import { inspect } from "util";

import userService from "../services/user.service";

class UserController {

  async create(req: Request, res: Response) {
    const { user, created } = await userService.createUser(req.body);
    return res.send({ user, created });
  }
  
}

export default new UserController();