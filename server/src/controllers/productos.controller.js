'use strict';
import { Productos, Proveedores } from "../models/index.js";
import { pageableHelpers, verify, renplaceNullObjects, replaceNull } from "../helpers/index.js";
import { upLoadImage } from "../libs/cloudinary.js";

export const createProducto = async (req, res, next) => {
  const producto = req.body;

  if (verify.isEmptyObject(producto) ) return next("404 bad request");
  let data;
  try {
    data = await Productos.create(producto);
  } catch (err) {
    console.log(err)
    return next("409 there was an error saving the product");
  }
  if (!data) return next("409 there was an error saving the product");

  return res.status(201).json({ data, message: "succes product created" });
};

export const updateProducto = async(req, res, next)=>{
    const producto = req.body;
    const { code } = req.params;

  if (!producto || !code) return next("404 bad request");
  let data;
  try {
    data = await Productos.update(producto,{ where: { code : code } , individualHooks : true });  
    data = replaceNull(data[1][0].dataValues);
    console.log(data)
  } catch (err) {
    console.error(err);
    return next("409 there was an error updating the product");
  }
  if (verify.isEmptyObject(data)) return next("409 there was an error updating the product");

  return res.status(201).json({ data, message: "succes product updating" });
  
}

export const getProductos = async (req, res, next) => {
  const pageable = pageableHelpers.getPageable(req.query);
  let data = [];
  try{
  data = await Productos.findAndCountAll({ attributes:['_id','code','name','price','detail','image'],
   include : { model : Proveedores , required : false , attributes:['name'] }, ...pageable });
   data = renplaceNullObjects(data)
  }catch(err){
    console.error(err)
    return next("409 hubo un conflicto")
  }
  res
    .status(200)
    .json({ data: { ...pageableHelpers.resPageable(pageable), rows : data }, message: "success!!" });
};

export const getProductosByProveedor = async (req, res, next) => {
  const proveedor = req.params.proveedor;

  if (!isNaN(tipo)) return next("400 the type param is string");

  const data = await Productos.findAll({attributes:['_id','code','name','price','detail'], 
  include:{ model: Proveedores, required : true ,attributes:['name']},where:{proveedor : proveedor} });
  console.log(data)

  if (verify.isEmptyObject(data)) return next(`404 not exists calogue with type '${type}'`);

  res.status(200).json({ data, message: "success!!" });
};

export const getProductoByCode = async (req, res, next) => {
  let data;
  const code = req.params.code;

  try{
  data = await Productos.findOne({
  include:{ model : Proveedores, required : false, attributes:['name'] } ,where: { code: code } }); 
  data = replaceNull(data.dataValues);
}catch(err){
  console.error(err);
  return next("409 there was a error get the product")
}

  if (verify.isEmptyObject(data)) return next(`404 no exists product with code: '${code}'`);


  res.status(200).json({ data, message: "success!!" });
};

export const deleteProductoByCode = async(req,res,next) => {
    const code = req.params.code;

    if(!isNaN(code))return next("400 the type param is a string");

    const verify = await Productos.count({where : {code:code}});

    if(verify != 1) return next("409 there was a problem with delete the product");

    return res.status(200).json({message : "delete successfull"})
}

export const searchProduct = async(req, res, next)=>{
  const query = req.query.q;
  if(!query) return next("400 bad request ");
  let data = await Productos.findAll({attributes : ["_id","code", "name","detail", "codalt","codBa"]});

   data = data.map(item=> item.dataValues);

   data = data.filter(item=>item.id === query ||item.code === query || item.codalt === query ||
    item.codBa === query || item.detail === query ||item.code.includes(query) || item.codalt.includes(query) ||
    item.codBa.includes(query) || item.detail.includes(query) )
   data = data.map(item=>{
     item.detail = item.detail.replaceAll(query,`<strong>${query}</strong>`);
     return item;
   })

  res.status(200).json({data: data});

}