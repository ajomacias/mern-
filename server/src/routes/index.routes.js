"use strict";
import { Router } from "express";
import { indexController } from "../controllers/index.js"

export const indexRoutes = Router();

indexRoutes.post("/logIn",indexController.logIn);
indexRoutes.post("/register",indexController.register);
