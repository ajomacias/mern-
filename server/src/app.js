'use strict'
import express from "express";
import Credentials from "./config/Credentials.js";
import morgan from "morgan";
import cors from "cors";
import {indexRouter} from "./routes/index.js";
import { GlobalErrorsHandle } from "./libs/Errors.js";

const app = express();

//variables
app.set("PORT", Credentials.PORT);

//Middlewares
app.use(express.json({strict: true}));
app.use(morgan('dev'));
app.use(cors({ origin: "http://localhost" }));

//Rutas
app.use("/api", indexRouter);

//errors handle next("code(401,200,404) message of error")
app.use(GlobalErrorsHandle);

export default app;