import { Sequelize } from "sequelize-typescript";
import config from "../lib/config";
config;
export const sequelize = new Sequelize({
	dialect: "postgres",
	database: config.dbName,
	username: config.dbUser,
	password: config.dbPassword,
	storage: ":memory:",
	models: [__dirname + "/models"],
});
