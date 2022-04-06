"use strict";
import { Router } from "express";
import { indexController } from "../controllers/index.js"

export const indexRouter = Router();

indexRouter.post("/logIn",indexController.logIn);
indexRouter.post("/register",indexController.register);
