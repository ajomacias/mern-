'use strict'
import express from "express";
import Credentials from "./config/Credentials.js";
import morgan from "morgan";
import cors from "cors";
import { userRoutes,proveedoresRoutes, catalogoRoutes, productosRouter } from "./routes/index.js";
import { GlobalErrorsHandle } from "./libs/Errors.js";
import fileUpload from "express-fileupload";

const app = express();

//variables
app.set("PORT", Credentials.PORT);

//Middlewares
app.use(express.json({strict: true}));
app.use(morgan('dev'));
app.use(cors({ origin: "http://localhost" }));
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : "./upload"
}))

//Rutas
app.use("/api/usuarios", userRoutes);
app.use("/api/proveedores", proveedoresRoutes);
app.use("/api/catalogos", catalogoRoutes);
app.use("/api/productos",productosRouter)

//errors handle next("code(401,200,404) message of error")
app.use(GlobalErrorsHandle);

export default app;