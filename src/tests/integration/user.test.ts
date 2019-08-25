import app from "../../app";
import request from "supertest";
import { UserInterface } from "../../app/models/user";
import userFactory from "../../database/factories/user.factory";
import sequelize from "../../config/database";
import bcrypt from "bcryptjs";

import { Request, Response, NextFunction } from "express";
import * as ValidatePermissionMiddleware from "../../app/middlewares/validate-permission";

jest.mock("../../app/middlewares/validate-permission");
const permissionMock = ValidatePermissionMiddleware as jest.Mocked<typeof ValidatePermissionMiddleware>;

permissionMock.default.mockImplementation(async (req: Request, res: Response, next: NextFunction, permission?: string) => next());

describe('user creation', () => {

  beforeEach(async() => await sequelize.sync({ force: true}));

  it('should create user with valid data', async (done) => {
    
    const data: UserInterface = await userFactory.attrs('User');

    const response = await request(app)
      .post('/user')
      .send(data);

    const { user, created } = response.body;

    expect(response.status).toBe(200);
    expect(created).toBeTruthy();
    expect(user).toMatchObject({ ...data, password: user.password });
    expect(await bcrypt.compare(data.password, user.password)).toBeTruthy();

    done();
  });

});