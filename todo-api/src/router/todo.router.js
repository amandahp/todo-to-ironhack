import express from "express";
import TodoController from "../controller/Todo.controller.js";

const router = express.Router();

router
  .get("/todos", TodoController.todoList)
  .post("/todos", TodoController.todoRegister)
  .put("/todos/:id", TodoController.todoUptade)
  .delete("/todos/:id", TodoController.todoDelete)

export default router;