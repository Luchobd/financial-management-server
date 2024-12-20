import { DataSource } from "typeorm";
import { User } from "../entities/User.entity";
import { Auth } from "../entities/Auth.entity";
import {
  TYPE_DB,
  HOST_DB,
  USER_DB,
  PASSWORD_DB,
  PORT_DB,
  NAME_DB,
} from "./process";

export const AppDataSource = new DataSource({
  type: TYPE_DB as "postgres",
  host: HOST_DB,
  username: USER_DB,
  password: PASSWORD_DB,
  port: +PORT_DB,
  database: NAME_DB,
  entities: [User, Auth],
  logging: true,
  synchronize: true,
});
