'use strict'
//import { proveedoresController } from "../controllers/index.js";
import { Router } from "express";

export const proveedoresRoutes = Router();

proveedoresRoutes.get("/",(req,res,next)=>{
    res.json({message :  "Hello proveedor"})
});