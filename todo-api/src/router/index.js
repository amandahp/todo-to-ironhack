import express from "express";
import todo from "./todo.router.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200)
  })

  app.use(
    express.json(),
    todo
  )
};

export default routes;