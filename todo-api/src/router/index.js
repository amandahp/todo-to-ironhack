import express from "express";
import todo from "./todo.router.js";
import auth from "./auth.router.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200)
  })

  app.use(
    express.json(),
    todo,
    auth
  )
};

export default routes;