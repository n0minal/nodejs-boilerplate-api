import { Sequelize } from 'sequelize-typescript';
import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const sequelize: Sequelize = new Sequelize({
  dialect: <string>process.env.DATABASE_DIALECT || 'sqlite',
  database: <string>process.env.DATABASE_NAME,
  username: <string>process.env.DATABASE_USER,
  host: <string>process.env.DATABASE_HOST,
  password: <string>process.env.DATABASE_PASSWORD,
  modelPaths: [__dirname + '/../app/models'],
  storage: <string>process.env.DATABASE_STORAGE,
  logging: false
});

export default sequelize;
