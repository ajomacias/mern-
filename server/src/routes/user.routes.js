"use strict";
import { Router } from "express";
import { userController } from "../controllers/index.js"

export const userRoutes = Router();

userRoutes.post("/register",userController.register);
userRoutes.post("/logIn",userController.logIn);
userRoutes.get("/", userController.getUsers);
