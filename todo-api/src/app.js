import express from "express";
import db from "./config/dbConnection.js";
import routes from "./router/index.js";
import logger from "morgan";
import cors from "cors";

db.on("error", console.log.bind(console, "Connection error"));
db.once("open", () => {
  console.log("Connection sucess")
});

const app = express();

app.use(cors());

app.use(logger('dev'));

app.use(express.json());
routes(app);

export default app;