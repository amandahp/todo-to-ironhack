import express from "express";
import AuthController from "../controller/Auth.controller.js";

const router = express.Router();

router
  .post("/signup", AuthController.authRegister)

export default router;