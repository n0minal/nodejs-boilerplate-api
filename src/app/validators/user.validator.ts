import { check } from "express-validator";

export const createUserValidator = [
  check('name')
    .exists({ checkNull: true, checkFalsy: true })
    .isString()
    .isLength({ min: 4, max: 24 }),
  check('username')
    .exists({ checkNull: true, checkFalsy: true })
    .isString()
    .isLength({ min: 4, max: 24 }),
  check('password')
    .exists({ checkNull: true, checkFalsy: true })
    .isString()
    .isLength({ min: 4, max: 24 }),
  check('email')
    .exists({ checkNull: true, checkFalsy: true })
    .isString()
    .isLength({ min: 4, max: 128 })
];