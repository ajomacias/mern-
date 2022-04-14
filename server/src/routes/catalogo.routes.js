import { Router } from "express";
import { catalogoController } from "../controllers/index.js";

export const catalogoRoutes = Router();

catalogoRoutes.post("/", catalogoController.createCatalogo);
catalogoRoutes.put("/", catalogoController.updateCatalogue);
catalogoRoutes.get("/", catalogoController.getCatalogos);
catalogoRoutes.get("/type/:type", catalogoController.getCatalogosByType);
catalogoRoutes.get("/:code",catalogoController.getCatalogoByCode);
catalogoRoutes.delete("/:id", catalogoController.deleteCatalogoByPk);