import { useProductoContext, useAlertContext } from "../hooks"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { AiOutlineBarcode } from "react-icons/ai";
import { CgMathPercent } from "react-icons/cg";
import { RiExchangeDollarFill } from "react-icons/ri";
import { BiDollarCircle, BiBible, BiLoaderAlt } from "react-icons/bi";
import { GiChemicalDrop } from "react-icons/gi";
import { FaSave } from "react-icons/fa";
import { useParams } from "react-router-dom";

export const FormularioProducto = () => {

  const { createProduct, getProductByCodeRequest, updateProduct } = useProductoContext(null);
  const { generalAlert } = useAlertContext(); 
  const { code } = useParams();
  
  const [producto, setProducto] = useState({
    code:"",
    name:"",
    detail:"",
    codBa : "",
    codalt : "",
    price : "",
    price2 : "",
    price3 : "",
    price4 : "",
    cantidad : "",
    costo : "",
    taeiIv : "",
    image : null,
    producWeb : "",
    idUnidadMedida : "",
    idTipoProducto : "",
    categoriaId : "",
    subcategoria : "",
    subcategoriaId2 : "",
    stockMin : "",
    fechaCadu : "",
    subCategoriaId : "",
    prec4Porc : "",
    prec3Porc : "",
    prec2Porc : "",
    porcentajeUtil : "",
    porcentajeDesc : "",
    precBruto : "",
    baseImponible : "",
    IdIce : "",
    IdIrbpnr : "",
    porcentajeImp : "",
    porcentajeIce : "",
    porcentajelrbpnr : "",
    promFarm : "",
    paqueteFarm : "",
    pvpFarm : "",
    descFarm : "",
    price2PorFarm : "",
    price3PorFarm : "",
    price4PorFarm : "",
    subTotalFarm : "",
    valDscFarm : "",
    totDetfarm : "",
    cantidadFarm : "",
    costfarm : "",
    prec2Farm : "",
    prec3Farm : "",
    prec4Farm : "",
    utilFarm : "",
    pFarm : "",
    costSinIv : "",
    horaEntrada : new Date().toISOString().replace("T"," ").replace("Z","").slice(0,19),
    horaSalida : new Date().toISOString().replace("T"," ").replace("Z","").slice(0,19),
    unidades : "",
    referenciaMinina : "",
    referenciaMaxima : "",
    comision : "",
    agrupado : "",
    leyenda : "",
    ensayo : "",
    metodo : "",
    orden : "",
    comision2 : "",
    comisionP : "",
    comisionP2 : "",
    externo : "",
    lote : "",
    proveedor : "",
    generico : "",
  });
  
  useEffect(()=>{

    (async()=>{
      if(code){
        const productoRequest =  await getProductByCodeRequest(code);
        if(productoRequest) setProducto(productoRequest); 

      }
    })()


  },[])

  return (

      <div className="h-5/6 w-10/12 p-2 bg-white border border-slate-700 overflow-y-scroll" >
        <Formik
        initialValues={producto}
        validationSchema={Yup.object({
          code : Yup.string().required(),
          name : Yup.string().required(),
          detail : Yup.string().min(7).nullable(true),
          proveedor:Yup.number().min(0),
          codBa : Yup.string().max(20).required("this is required!!"),
          codalt : Yup.string().max(20).required("this is required!!"),
          price : Yup.number().min(0).required(),
          price2 : Yup.number().min(0).nullable(true),
          price3 : Yup.number().min(0).nullable(true),
          price4 :Yup.number().min(0).nullable(true),
          cantidad : Yup.number().min(0).nullable(true),
          costo : Yup.number().min(0).nullable(true),
          taeiIv : Yup.number().nullable(true),
          producWeb : Yup.number().nullable(true),
          idUnidadMedida : Yup.number().nullable(true),
          idTipoProducto : Yup.number().nullable(true),
          categoriaId : Yup.number().nullable(true),
          subcategoriaId : Yup.number().nullable(true),
          subcategoriaId2 : Yup.number().nullable(true),
          stockMin : Yup.number().min(0).nullable(true),
          fechaCadu : Yup.date().required().nullable(true),
          prec4Porc : Yup.number().min(0).nullable(true),
          prec3Porc : Yup.number().min(0).nullable(true),
          prec2Porc :Yup.number().min(0).nullable(true),
          porcentajeUtil : Yup.number().min(0).nullable(true),
          porcentajeDesc : Yup.number().min(0).nullable(true),
          precBruto : Yup.number().min(0).nullable(true),
          baseImponible : Yup.number().min(0).nullable(true),
          IdIce : Yup.number().min(0).nullable(true),
          IdIrbpnr : Yup.number().min(0).nullable(true),
          porcentajeImp : Yup.number().min(0).nullable(true),
          porcentajeIce : Yup.number().min(0).nullable(true),
          porcentajelrbpnr : Yup.number().min(0).nullable(true),
          cantidadFarm : Yup.number().min(0).nullable(true),
          promFarm : Yup.number().min(0).nullable(true),
          paqueteFarm : Yup.number().min(0).nullable(true),
          pvpFarm : Yup.number().min(0).nullable(true),
          descFarm : Yup.number().min(0).nullable(true),
          price2PorFarm : Yup.number().min(0).nullable(true),
          price3PorFarm : Yup.number().min(0).nullable(true),
          price4PorFarm : Yup.number().min(0).nullable(true),
          subTotalFarm : Yup.number().min(0).nullable(true),
          valDscFarm : Yup.number().min(0).nullable(true),
          totDetfarm :Yup.number().min(0).nullable(true),
          costfarm : Yup.number().min(0).nullable(true),
          prec2Farm : Yup.number().min(0).nullable(true),
          prec3Farm : Yup.number().min(0).nullable(true),
          prec4Farm : Yup.number().min(0).nullable(true),
          utilFarm : Yup.number().min(0).nullable(true),
          pFarm : Yup.number().min(0).nullable(true),
          costSinIv : Yup.number().min(0).nullable(true),
          horaEntrada : Yup.date().nullable(true),
          horaSalida : Yup.date().nullable(true),
          unidades : Yup.string().max(10).min(1).nullable(true),
          referenciaMinina : Yup.number().min(0).nullable(true),
          referenciaMaxima : Yup.number().min(0).nullable(true),
          comision : Yup.number().min(0).nullable(true),
          agrupado : Yup.number().min(0).nullable(true),
          leyenda : Yup.number().min(0).nullable(true),
          ensayo : Yup.number().min(0).nullable(true),
          metodo : Yup.string().max(500).nullable(true),
          orden : Yup.number().min(0).nullable(true),
          comision2 : Yup.number().min(0).nullable(true),
          comisionP : Yup.number().min(0).nullable(true),
          comisionP2 : Yup.number().min(0).nullable(true),
          externo : Yup.number().min(0).nullable(true),
          lote : Yup.string().max(20).min(1).nullable(true),
          generico :Yup.string().max(120).min(1).nullable(true) ,
          
          
    
        })}
        onSubmit={async(values, actions)=>{
        if(!code){
          const response = await createProduct(values);
          console.log(response);
        generalAlert(response.data.message);
        }else{
          const response2 = await updateProduct(values, code);

          generalAlert(response2.data.message);
        }
        
        
        actions.setSubmitting(false);

        }}
        
        enableReinitialize={true}
        >
          {({isSubmitting, handleSubmit })=>(
            <div className="text-mono ring-1 rounded">
              <div className="h-7 bg-zinc-300"></div>
              
              <h2 className="font-medium border-b border-dashed p-2 border-b-slate-400">Nuevo Producto</h2>
              <select className="block mx-auto focus:outline-none p-1 my-1 bg-slate-400 rounded">
                <option className="text-base" value="s">PORXCDT</option>
              </select>
            <Form onSubmit={handleSubmit}>
              <div id="codigos">
              <div className="font-medium p-2 bg-zinc-300 my-1">
              <h3 className=""> <AiOutlineBarcode className="inline-block h-7 w-7"/> <span className="pt-1">CODIGOS</span></h3>
              </div>
              <div className="flex flex-col text-sm items-center">
              <table>
                  <tbody>
                  <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="name" >Nombre</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="name" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="name" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="code" >Codigo</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="code" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="code" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="codalt" >Codalt*</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="codalt" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="codalt" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                <label className="font-medium mx-2" htmlFor="detail" >Descripcion*</label>
                      </td>
                      <td>
                      <Field component="textarea" rows="4" className="focus:outline-none ring-1 w-40 ring-zinc-400" name="detail" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="detail" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="costConIv" >Costo con iva*</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="costConIv" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="costConIv" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="costSinIv" >Costo sin iva*</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="costSinIv" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="costSinIv" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="tarifIv" >Tarifa Iva*</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="tarifIv" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="tariIv" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="price" >Precio*</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="price" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="price" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="price2" >Precio 2*</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="price2" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="price2" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="price3" >Precio 3*</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="price3" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="price3" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="price4" >Precio 4*</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="price4" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="price4" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="cantidad" >Cantidad*</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="cantidad" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="cantidad" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="codBa" >Codigo de barras*</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="codBa" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="codBa" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="comision" >Comision*</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="comision" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="comision" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="comision2" >Comision 2*</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="comision2" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="comision2" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="lote" >Lote*</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="lote" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="lote" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="proveedor" >Proveedor*</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="proveedor" type="text"/>
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="image" >Picture*</label>
                      </td>
                      <td>
                      <input className="focus:outline-none ring-1 ring-zinc-400" name="image" type="file"/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
              <div id="datosCompra">
              <div className="font-medium p-2 bg-zinc-300 my-1">
              <h3 className=""> <CgMathPercent className="inline-block h-7 w-7"/> <span className="pt-1">DATOS PARA COMPRA</span></h3>
              </div>
              <div className="flex flex-col text-sm items-center">
              <table>
                  <tbody>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="cantFarm">Cantidad farmacia</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="cantFarm" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="cantFarm" component="p" />
                      </td>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="totDetFarm">Total detalle farmacia</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="totDetFarm" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="totDetFarm" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="promFarm" >Promocion farmacia</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="promFarm" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="promFarm" component="p" />
                      </td>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="cantidadFarm">Cantidad farmacia</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="cantidadFarm" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="cantidadFarm" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                <label className="font-medium mx-2" htmlFor="paqueteFarm" >Paquete farmacia</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="paqueteFarm" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="paqueteFarm" component="p" />
                      </td>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="costFarm">Costo Farmacia</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="costFarm" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="costFarm" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="pvpFarm" >Pvp farmacia</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="pvpFarm" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="pvpFarm" component="p" />
                      </td>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="precFarm">Precio farmacia</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="precFarm" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="precFarm" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="descFarm" >Descuento farmacia</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="descFarm" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="descFarm" component="p" />
                      </td>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="prec2Farm">Precio 2 farmacia</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="prec2Farm" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="prec2Farm" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="utilFarm" >utilidad farmacia</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="utilFarm" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="utilFarm" component="p" />
                      </td>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="prec3Farm">Precio 3 farmacia</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="prec3Farm" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="prec3Farm" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="precio3PorcFarm" >Precio 3 porciones farmacia</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="precio3PorcFarm" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="precio3PorcFarm" component="p" />
                      </td>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="prec4farm">Precio 4 farmacia</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="prec4Farm" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="prec4Farm" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="price4PorFarm" >precio 4 porcionnes Farmacia</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="price4PorFarm" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="precio4PorcFarm" component="p" />
                      </td>
                      
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="subTotalFarm" >Subtotal farmacia</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="subTotalFarm" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="subTotalFarm" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="valDscFarm" >Valor descuento farmacia</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="valDscFarm" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="valDscFarm" component="p" />
                      </td>
                    </tr>
                    <tr>
                    <td>

<label className="font-medium mx-2" htmlFor="pFarm" >P Farmacia</label>
      </td>
      <td>
      <Field className="focus:outline-none ring-1 ring-zinc-400" name="pFarm" type="text"/>
      <ErrorMessage className="text-xs text-red-400" name="pFarm" component="p" />
      
      </td>
                     
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="price2PorFarm" >precio 2 porcionnes Farmacia</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="price2PorFarm" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="price2PorFarm" component="p" />
                      </td>
                      
                    </tr>
                   
                  </tbody>
                </table>
              </div>
              </div>
              <div id="costosPrecios">
              <div className="font-medium p-2 bg-zinc-300 my-1">
              <h3 className=""> <RiExchangeDollarFill  className="inline-block h-7 w-7"/> <span className="pt-1">COSTOS Y PRECIOS</span></h3>
              
              </div>
              <div className="flex flex-col text-sm items-center">
              <table>
                  <tbody>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="porcentajeUtil" >+Porcentaje Utilidad*</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="porcentajeUtil" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="porcentajeUtil" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="precBruto" >(Costo+%Util) Precio Bruto</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="precBruto" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="precBruto" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="porcentajeDesc" >-Porcentaje Descuento*	</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="porcentajeDesc" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="porcentajeDesc" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>

                <label className="font-medium mx-2" htmlFor="baseImponible" >Base Imponible</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1 ring-zinc-400" name="baseImponible" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="baseImponible" component="p" />
                      </td>
                      
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
              <div id="impuestos">
              <div className="font-medium p-2 bg-zinc-300 my-1">
              <h3 className=""> <RiExchangeDollarFill  className="inline-block h-7 w-7"/> <span className="pt-1">IMPUESTOS</span></h3>
              </div>
              <div className="flex flex-col text-sm items-center">
              <table>
                  <tbody>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="porcentajeImp" >+Porcentaje Impuesto</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="porcentajeImp" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="porcentajeImp" component="p" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>

              <div id="masImpuestos">
              <div className="font-medium p-2 bg-zinc-300 my-1">
              <h3 className=""> <RiExchangeDollarFill  className="inline-block h-7 w-7"/> <span className="pt-1">MAS IMPUESTOS</span></h3>
              </div>
              <div className="flex flex-col text-sm items-center">
              <table>
                  <tbody>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="IdIce" >Id ice</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="IdIce" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="IdIce" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="porcentajeIce" >Porcentaje Ice</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="porcentajeIce" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="porcentajeIce" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="IdIrbpnr" >Id Irbpnr</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="IdIrbpnr" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="IdIrbpnr" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="porcentajelrbpnr" >Porcentaje lrbpnr</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="porcentajelrbpnr" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="porcentajeLrbpnr" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="horaEntrada" >Hora de entrada</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="horaEntrada" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="horaEntrada" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="horaSalida" >Hora salida</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="horaSalida" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="horaSalida" component="p" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
              <div id="precios">
              <div className="font-medium p-2 bg-zinc-300 my-1">
              <h3 className=""> <BiDollarCircle  className="inline-block h-7 w-7"/> <span className="pt-1">PRECIOS</span></h3>
              </div>
              <div className="flex flex-col text-sm items-center">
              <table>
                  <tbody>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="prec2Porc" >Precio 2 porciones</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="prec2Porc" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="prec2Porc" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="prec3Porc" >Precio 3 porciones</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="prec3Porc" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="prec3Porc" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="prec4Porc" >Precio 4 porciones</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="prec4Porc" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="prec4Porc" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="Is" >Calcular</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="Is" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="Is" component="p" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
              <div id="laboratorio">
              <div className="font-medium p-2 bg-zinc-300 my-1">
              <h3 className=""> <GiChemicalDrop  className="inline-block h-7 w-7"/> <span className="pt-1">LABORATORIO</span></h3>
              </div>
              <div className="flex flex-col text-sm items-center">
              <table>
                  <tbody>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="StockMin" >Stock minimo</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="StockMin" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="StockMin" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="fechaCadu" >Fecha caducidad</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="fechaCadu" type="date"/>
                      <ErrorMessage className="text-xs text-red-400" name="fechaCadu" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="idTipoProducto" >Tipo producto</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1   ring-zinc-400" as="select" name="idTipoProducto"/>
                      <ErrorMessage className="text-xs text-red-400" name="idTipoProducto" component="p" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="idUnidadMedida" >Unidad Medida</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="idUnidadMedida" as="select"/>
                      <ErrorMessage className="text-xs text-red-400" name="idUnidadMedida" component="p"/>
                      
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
              <div id="otros">
              <div className="font-medium p-2 bg-zinc-300 my-1">
              <h3 className=""> <BiBible className="inline-block h-7 w-7"/> <span className="pt-1">OTROS</span></h3>
              </div>
              <div className="flex flex-col text-sm items-center">
              <table>
                  <tbody>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="agrupado" >Agrupado</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="agrupado" as="select"> 
                      <ErrorMessage className="text-xs text-red-400" name="agrupado" component="p"/>
                      
                      <option value="si">SI</option>
                      <option value="no">NO</option>
                      </Field>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="categoriaId" >Categoria</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="categoriaId" as="select">
                      <ErrorMessage className="text-xs text-red-400" name="categoriaId" component="p"/>
                      </Field>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="subcategoriaId" >SubCategoria</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1   ring-zinc-400" as="select" name="subcategoriaId">
                      <ErrorMessage className="text-xs text-red-400" name="subcategoriaId" component="p"/>
                        </Field>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="subCategoria2" >SubCategoria 2 </label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="subCategoria2" as="select">
                      <ErrorMessage className="text-xs text-red-400" name="subCategoria2" component="p"/>
                      </Field>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="unidades" >Unidades</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="unidades" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="unidades" component="p"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="referenciaMinima" >Referencia Minina</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="referenciaMinima" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="referenciaMinima" component="p"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="referenciaMaxima" >Referencia Maxima</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="referenciaMaxima" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="referenciaMaxima" component="p"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="leyenda" >Leyenda</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="leyenda" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="leyenda" component="p"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="ensayo" >Ensayo</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="ensayo" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="ensayo" component="p"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="metodo" >Metodo</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="metodo" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="metodo" component="p"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="comisionP" >Comision p</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="comisionP" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="comisionP" component="p"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="comisionP2" >Comision p 2</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="comisionP2" type="text"/>
                      <ErrorMessage className="text-xs text-red-400" name="comisionP2" component="p"/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <label className="font-medium block mx-2" htmlFor="externo" >Externo</label>
                      </td>
                      <td>
                      <Field className="focus:outline-none ring-1  ring-zinc-400" name="externo" as="select"> 
                      <option value="1">SI</option>
                      <option value="0">NO</option>
                      </Field>
                      <ErrorMessage className="text-xs text-red-400" name="externo" component="p"/>
                      </td>
                    </tr>

                  </tbody>
                </table>
                <button
                disabled={isSubmitting}
                 type="submit" className="bg-zinc-600 w-full flex justify-center hover:bg-zinc-500 p-2 my-2"> 
                {isSubmitting ? <BiLoaderAlt className="animate-spin" /> : <FaSave /> } 
                </button>
              </div>
              </div>
            </Form>
            </div>


          )}
        </Formik>

        
      </div>

  )
}