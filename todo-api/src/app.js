import express from "express";
import db from "./config/dbConnection.js";
import routes from "./router/index.js";

db.on("error", console.log.bind(console, "Connection error"));
db.once("open", () => {
  console.log("Connection sucess")
});

const app = express();

app.use(express.json());
routes(app);

export default app;