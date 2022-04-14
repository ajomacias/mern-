'use strict';
import { Productos, Proveedores } from "../models/index.js";
import { pageableHelpers, verify } from "../helpers/index.js";

export const createProducto = async (req, res, next) => {
  const producto = req.body;

  if (verify.isEmptyObject(producto) ) return next("404 bad request");
  let data;
  try {
    data = await Productos.create(producto);
  } catch (err) {
    return next("409 there was an error saving the product");
  }
  if (!data) return next("409 there was an error saving the product");

  return res.status(201).json({ data, message: "succes product created" });
};

export const updateProducto = async(req, res, next)=>{
    const producto = req.body;

  if (!producto || !producto?._id) return next("404 bad request");
  let data;
  try {
    data = await Productos.update(producto,{ where: producto._id });
  } catch (err) {
    return next("409 there was an error saving the product");
  }
  if (verify.isEmptyObject(data)) return next("409 there was an error saving the product");

  return res.status(201).json({ data, message: "succes product created" });
  
}

export const getProductos = async (req, res, next) => {
  const pageable = pageableHelpers.getPageable(req.query);
  let data = [];
  try{
  data = await Productos.findAndCountAll({ attributes:['_id','code','name','price','detail'],
   include : { model : Proveedores , required : true , attributes:['name'] }, ...pageable });
  }catch(err){
    return next("409 hubo un conflicto")
  }
  res
    .status(200)
    .json({ data: { ...pageableHelpers.resPageable(pageable), ...data }, message: "success!!" });
};

export const getProductosByProveedor = async (req, res, next) => {
  const proveedor = req.params.proveedor;

  if (!isNaN(tipo)) return next("400 the type param is string");

  const data = await Productos.findAll({attributes:['_id','code','name','price','detail'], 
  include:{ model: Proveedores, required : true ,attributes:['name']},where:{proveedor : proveedor} });

  if (verify.isEmptyObject(data)) return next(`404 not exists calogue with type '${type}'`);

  res.status(200).json({ data, message: "success!!" });
};

export const getProductoByCode = async (req, res, next) => {
  const code = req.params.code;

  if (!isNaN(code)) return next("400 the type param is string");

  const data = Productos.findOne({attributes:['_id','code','name','price','detail'],
   include:{ model : Proveedores, required : true, attributes:['name'] } ,where: { code: code } });

  if (verify.isEmptyObject(data)) return next(`404 no exists product with code: '${code}'`);

  res.status(200).json({ data, message: "success!!" });
};

export const deleteProductoByPk = async(req,res,next) => {
    const _id = req.params.id;

    if(isNaN(_id))return next("400 the type param is number");

    const verify = await Productos.count({where : {_id:_id}});

    console.log(verify);

    if(verify != 1) return next("409 there was a problem with delete the product");
}
