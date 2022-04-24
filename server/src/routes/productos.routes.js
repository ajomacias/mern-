import { Router } from "express";
import { productosController } from "../controllers/index.js";

export const productosRouter = Router();

productosRouter.post("/", productosController.createProducto);
productosRouter.get("/s",productosController.searchProduct);
productosRouter.put("/:code", productosController.updateProducto);
productosRouter.delete("/:code", productosController.deleteProductoByCode);
productosRouter.get("/", productosController.getProductos);
productosRouter.get("/:code", productosController.getProductoByCode);

