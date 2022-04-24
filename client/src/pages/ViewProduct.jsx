import { useParams } from "react-router-dom";
import { useProductoContext } from "../hooks/useProductoContext";
import { BiDetail,BiLoaderAlt } from "react-icons/bi";
import { BsCashCoin } from "react-icons/bs";
import { useEffect, useState } from "react";
import { FcRemoveImage } from "react-icons/fc";
import { GrMoney } from "react-icons/gr";
import { GiTakeMyMoney } from "react-icons/gi";
import { ImLab } from "react-icons/im";
import { GoBook } from "react-icons/go";

export const ViewProduct = () => {
    const { code } = useParams();
    const { getProductByCodeRequest } = useProductoContext();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        (async () => {
            const productRequest = await getProductByCodeRequest(code);
            setProducto(productRequest);
        })()
    }, [])

    if (!producto) return (
        <div className="w-full h-full md:w-10/12 md:h-5/6 md:p-2 md:flex flex md:justify-center justify-center items-center md:items-cente bg-zinc-100r md:bg-zinc-100" >
            <BiLoaderAlt className="text-black text-opacity-90 h-32 w-32 animate-spin"/>
        </div>
    )

    return (
        <>
               <div className="w-full h-full md:w-10/12 md:h-5/6 p-2 bg-zinc-100" >
                <div id="xddd" className="w-full h-full p-1 border overflow-y-scroll rounded border-slate-700 " >
                 <div className="h-fit w-full ring-1" >
                 <h1 className="w-full p-1 bg-zinc-300 text-center flex justify-center items-center font-semibold text-base" > <BiDetail /> DETALLE PRODUCTO #{producto.code}</h1>
                    <div className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <div className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <div className="w-full border-r border-r-slate-400">
                          <h3 className="font-normal" >Nombre</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> {producto.name} </p>
                        </div>
                        <div className="w-full border-r border-r-slate-400">
                          <h3 className="font-normal" >Codalt</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> {producto.codalt} </p>
                        </div>
                        <div className="w-full border-r border-r-slate-400">
                          <h3 className="font-normal" >Codigo</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> {producto.code} </p>
                        </div>
                      </div>
                     </div>
                     
                 </div>
                 <div className="h-fit w-full ring-1" >
                    <div className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <div className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Categoria</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> {producto.categoriaId} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Cod. Barras</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> {producto.codBa} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Precio</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.price} </p>
                        </div>
                        <div className="w-2/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Prec.#2</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.price2} </p>
                        </div>
                      </div>
                     
                     </div>
                     
                 </div>
                 <div className="h-fit w-full ring-1" >
                    <div className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <div className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Prec. #3</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.price3} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Prec.#4</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.price4} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Cost. Iva</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.costConIv} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >CostNot. Iva</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.costSinIv} </p>
                        </div>
                      </div>
                     
                     </div>
                     
                 </div>
                 <div className="h-fit w-full ring-1" >
                    <div className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <div className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Tarif. Iva</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.tarifIv} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Catidad.</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> #{producto.cantidad} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Comision</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.comision} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Comision #2</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.comision2} </p>
                        </div>
                      </div>
                     
                     </div>
                     
                 </div>
                 <div className="h-fit w-full ring-1" >
                    <div className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <div className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Lote.</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.lotes} </p>
                        </div>
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Proveedor.</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> #{producto.proveedor} </p>
                        </div>
                        <div className="w-4/12 h-24 border-r flex flex-wrap items-center justify-center border-r-slate-400">
                          { producto.image ? <image src={producto.image} /> : <FcRemoveImage className="h-full w-full" /> }
                        </div>  
                      </div>
                     
                     </div>
                     
                 </div>
                 
                 <div className="h-fit w-full ring-1" >
                 <h1 className="w-full p-1 bg-zinc-300 text-center flex justify-center items-center font-semibold text-base" > <BsCashCoin /> DATOS PARA COMPRA #{producto.code}</h1>
                     
                    <div className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <div className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Cant. Farm</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ...{producto.cantFarm} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Prom. farm</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.promFarm} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Paq. Farm</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.paqueteFarm} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Pvp. farm</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.pvpFarm} </p>
                        </div>
                      </div>
                     </div>
                     
                 </div>
                 <div className="h-fit w-full ring-1" >
                    <div className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <div className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Desc. Farm</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">{producto.descFarm}% </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Util. Farm</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.utilFarm} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Prec 3 Porc. Farm</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.precio3PorFarm} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Prec 4 Porc. Farm</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.price4Porfarm} </p>
                        </div>
                      </div>
                     
                     </div>
                     
                 </div>
                 <div className="h-fit w-full ring-1" >
                    <div className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <div className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >SubTotal. Farm</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.subTotalFarm} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Val desc. Farm</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.valDscFarm} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >P. Farm</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.pFarm} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Prec 2 Porc. Farm</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.price2PorFarm} </p>
                        </div>
                      </div>
                     
                     </div>
                     
                 </div>
                 <div className="h-fit w-full ring-1" >
                 <div className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <div className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Total detll . Farm</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.totDetFarm} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Cant. Farm</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.cantidadFarm} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Cost. Farm</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.costFarm} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Prec. Farm</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.precFarm} </p>
                        </div>
                      </div>
                     
                     </div>
                     
                 </div>
                 <div className="h-fit w-full ring-1" >
                 <div className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <div className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Prec #2 . Farm</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.prec2Farm} </p>
                        </div>
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Prec #3 . Farm</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.prec3Farm} </p>
                        </div>
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Prec #4 . Farm</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.prec4Farm} </p>
                        </div>
                      </div>
                     
                     </div>
                     
                 </div>
                 <div className="h-fit w-full ring-1" >
                 <h1 className="w-full p-1 bg-zinc-300 text-center flex justify-center items-center font-semibold text-base" > <GrMoney /> COSTOS Y PRECIOS #{producto.code}</h1>
                     
                    <div className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <div className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Porc %. util</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> {producto.porcentajeUtil}% </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Prec. Bruto</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.precBruto} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Porc %. Desc</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.porcentajeDesc}% </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Base. Impo</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.baseImponible} </p>
                        </div>
                      </div>
                     </div>
                     
                 </div>
                 <div className="h-fit w-full ring-1" >
                 <h1 className="w-full p-1 bg-zinc-300 text-center flex justify-center items-center font-semibold text-base" > <GiTakeMyMoney /> IMPUESTOS #{producto.code}</h1>
                     
                    <div className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <div className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <div className="w-full border-r border-r-slate-400">
                          <h3 className="font-normal" >Porc %. Impuesto</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> {producto.porcentajeUtil}%</p>
                        </div>
                      </div>
                     </div>
                     
                 </div>
                 <div className="h-fit w-full ring-1" >
                 <h1 className="w-full p-1 bg-zinc-300 text-center flex justify-center items-center font-semibold text-base" > <GiTakeMyMoney/> MAS IMPUESTOS #{producto.code}</h1>
                     
                    <div className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <div className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Id. ICE</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">{producto.idIce}% </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Porc. ICE</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.porcentajeIce} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Id Irbpnrc</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.IdIrbpnr}% </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Porc. Lrbpnr</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.porcentajelrbpnr} </p>
                        </div>
                      </div>
                     </div>

                     <div className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <div className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <div className="w-6/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Hora. Entrada</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">.. {producto.horaEntrada} </p>
                        </div>
                        <div className="w-6/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Hora. Salida</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200"> .. {producto.horaSalida} </p>
                        </div>
                      </div>
                     </div>

                 </div>
                 <div className="h-fit w-full ring-1" >
                 <h1 className="w-full p-1 bg-zinc-300 text-center flex justify-center items-center font-semibold text-base" > <GrMoney/> PRECIOS #{producto.code}</h1>
                     
                    <div className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <div className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Prec #2. Porc</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.prec2Porc} </p>
                        </div>
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Prec #3. Porc</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.prec3Porc} </p>
                        </div>
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Prec #4. Porc</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.prec4Porc} </p>
                        </div>
                      </div>
                     </div>                     
                 </div>
                 <div className="h-fit w-full ring-1" >
                 <h1 className="w-full p-1 bg-zinc-300 text-center flex justify-center items-center font-semibold text-base" > <ImLab/> LABORATORIO</h1>
                     
                    <div className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <div className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Stock Min</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.stockMin} </p>
                        </div>
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Fecha caducidad</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">.. {producto.fechaCadu} </p>
                        </div>
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Tipo producto</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.idTipoProducto} </p>
                        </div>
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Unid. Media</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.idUnidadMedida} </p>
                        </div>
                      </div>
                     </div>         
                                 
                 </div>
                 <div className="h-fit w-full ring-1" >
                 <h1 className="w-full p-1 bg-zinc-300 text-center flex justify-center items-center font-semibold text-base" > <GoBook/>OTROS</h1>
                     
                    <div className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <div className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Agrupado</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">...{producto.agrupado} </p>
                        </div>
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Categoria</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.categoriaId} </p>
                        </div>
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Sub. Categoria</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.subCategoriaId} </p>
                        </div>
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Sub. Categoria #2</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.subCategoria2} </p>
                        </div>
                        
                        
                      </div>
                     </div> 
                                                       
                 </div>
                 <div className="h-fit w-full ring-1" >
                    <div className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <div className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Unidades</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">... {producto.unidades} </p>
                        </div>
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Ref. Min</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.referenciaMinima} </p>
                        </div>
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Ref. Max</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.referenciaMaxima} </p>
                        </div>
                        <div className="w-4/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Leyenda</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.leyenda} </p>
                        </div>
                        
                        
                      </div>
                      
                     </div> 
                                                       
                 </div>
                 <div className="h-fit w-full ring-1" >
                    <div className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <div className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Ensayo</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">... {producto.ensayo} </p>
                        </div>
                        <div className="w-3/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Metodo</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.metodo} </p>
                        </div>
                        <div className="w-2/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Comision P</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.comisionP} </p>
                        </div>
                        <div className="w-2/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Comision P #2</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.comisionP2} </p>
                        </div>
                        <div className="w-2/12 border-r border-r-slate-400">
                          <h3 className="font-normal" >Externo</h3>
                          <p className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.externo} </p>
                        </div>
                        
                        
                      </div>
                      
                     </div> 
                                                       
                 </div>
                 
                 

                </div>


               </div>
        </>
    )
}