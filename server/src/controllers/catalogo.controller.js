"use strict";
import { Catalogos } from "../models/index.js";
import { pageableHelpers, verify } from "../helpers/index.js";

export const createCatalogo = async (req, res, next) => {
  const catalogo = req.body;

  if (verify.isEmptyObject(catalogo)) return next("404 bad request");
  let data;
  try {
    data = await Catalogos.create(catalogo);
  } catch (err) {
    return next("409 there was an error saving the catalogue");
  }
  if (!data) return next("409 there was an error saving the catalogue");

  return res.status(201).json({ data, message: "succes catalogue created" });
};

export const updateCatalogue = async(req, res, next)=>{
    const catalogo = req.body;

  if (!catalogo || !catalogo?._id) return next("404 bad request");
  let data;
  try {
    data = await Catalogos.update(catalogo,{ where: catalogo._id });
  } catch (err) {
    return next("409 there was an error saving the catalogue");
  }
  if (!data) return next("409 there was an error saving the catalogue");

  return res.status(201).json({ data, message: "succes catalogue created" });

}

export const getCatalogos = async (req, res, next) => {
  const pageable = pageableHelpers.getPageable(req.query)

  const data = await Catalogos.findAndCountAll({ ...pageable });

  res
    .status(200)
    .json({ data: { ...pageableHelpers.resPageable(pageable), ...data }, message: "success!!" });
};

export const getCatalogosByType = async (req, res, next) => {
  const type = req.params.type;

  if (!isNaN(tipo)) return next("400 the type param is string");

  const data = await Catalogos.findAll({ where: { type: `${type}` } });

  if (verify.isEmptyObject(data)) return next(`404 not exists calogue with type '${type}'`);

  res.status(200).json({ data, message: "success!!" });
};

export const getCatalogoByCode = async (req, res, next) => {
  const code = req.params.code;

  if (!isNaN(code)) return next("400 the type param is string");

  const data = Catalogos.findOne({ where: { code: code } });

  if (verify.isEmptyObject(data)) return next(`404 no exists catalogo with code: '${code}'`);

  res.status(200).json({ data, message: "success!!" });
};

export const deleteCatalogoByPk = async(req,res,next) => {
    const _id = req.params.id;

    if(isNaN(_id))return next("400 the type param is number");

    const verify = await Catalogos.count({where : {_id:_id}});

    console.log(verify);

    if(verify != 1) return next("409 there was a problem with delete the catalogue");
}