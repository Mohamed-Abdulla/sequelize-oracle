import { Sequelize } from "sequelize";
require("dotenv").config();

const connection = new Sequelize(`${process.env.POSTGRES_CONNECTION_STRING!}`, {
  logging: false,
});

export default connection;
