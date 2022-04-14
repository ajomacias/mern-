import { Document, Text, View ,Page } from "@react-pdf/renderer";
import { useParams } from "react-router-dom";
import { useProductoContext } from "../hooks/useProductoContext";
import { BiDetail,BiLoaderAlt } from "react-icons/bi";
import { BsCashCoin } from "react-icons/bs";
//import { NotFoundPage } from "../pages";
import { useEffect, useState } from "react";
import { FcRemoveImage } from "react-icons/fc";
import { GrMoney } from "react-icons/gr";
import { GiTakeMyMoney } from "react-icons/gi";
import { ImLab } from "react-icons/im";
import { GoBook } from "react-icons/go";

const VerProductoPDF = () =>{
    const { code } = useParams();
    const { getProductByCodeRequest } = useProductoContext();
    //const response = getProductByCodeRequest(code);
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        (async () => {
            const productRequest = await getProductByCodeRequest(code);
            setProducto(productRequest);
        })()
    }, [])

    return(
        <Document >
        <Page size="A4" >
        <View className="w-10/12 h-5/6 p-2 bg-zinc-100" >
                <View id="xddd" className="w-full h-full p-1 border overflow-y-scroll rounded border-slate-700 " >
                 <View className="h-fit w-full ring-1" >
                 <Text className="w-full p-1 bg-zinc-300 text-center flex justify-center items-center font-semibold text-base" > <BiDetail /> DETALLE PRODUCTO #{producto.code}</Text>
                    <View className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <View className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <View className="w-full border-r border-r-slate-400">
                          <Text className="font-normal" >Nombre</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> {producto.name} </Text>
                        </View>
                        <View className="w-full border-r border-r-slate-400">
                          <Text className="font-normal" >Codalt</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> {producto.codalt} </Text>
                        </View>
                        <View className="w-full border-r border-r-slate-400">
                          <Text className="font-normal" >Codigo</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> {producto.code} </Text>
                        </View>
                      </View>
                     </View>
                     
                 </View>
                 <View className="h-fit w-full ring-1" >
                    <View className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <View className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Categoria</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> {producto.categoriaId} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Cod. Barras</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> {producto.codBa} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Precio</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.price} </Text>
                        </View>
                        <View className="w-2/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Prec.#2</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.price2} </Text>
                        </View>
                      </View>
                     
                     </View>
                     
                 </View>
                 <View className="h-fit w-full ring-1" >
                    <View className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <View className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Prec. #3</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.price3} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Prec.#4</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.price4} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Cost. Iva</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.costConIv} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >CostNot. Iva</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.costSinIv} </Text>
                        </View>
                      </View>
                     
                     </View>
                     
                 </View>
                 <View className="h-fit w-full ring-1" >
                    <View className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <View className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Tarif. Iva</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.tarifIv} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Catidad.</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> #{producto.cantidad} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Comision</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.cosmision} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Comision #2</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.comision2} </Text>
                        </View>
                      </View>
                     
                     </View>
                     
                 </View>
                 <View className="h-fit w-full ring-1" >
                    <View className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <View className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Lote.</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.lotes} </Text>
                        </View>
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Proveedor.</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> #{producto.proveedor} </Text>
                        </View>
                        <View className="w-4/12 h-24 border-r flex flex-wrap items-center justify-center border-r-slate-400">
                          { producto.image ? <image src={producto.image} /> : <FcRemoveImage className="h-full w-full" /> }
                        </View>  
                      </View>
                     
                     </View>
                     
                 </View>
                 
                 <View className="h-fit w-full ring-1" >
                 <Text className="w-full p-1 bg-zinc-300 text-center flex justify-center items-center font-semibold text-base" > <BsCashCoin /> DATOS PARA COMPRA #{producto.code}</Text>
                     
                    <View className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <View className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Cant. Farm</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ...{producto.cantFarm} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Prom. farm</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.promFarm} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Paq. Farm</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.paqueteFarm} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Pvp. farm</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.pvpFarm} </Text>
                        </View>
                      </View>
                     </View>
                     
                 </View>
                 <View className="h-fit w-full ring-1" >
                    <View className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <View className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Desc. Farm</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">{producto.descFarm}% </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Util. Farm</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.utilFarm} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Prec 3 Porc. Farm</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.precio3PorFarm} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Prec 4 Porc. Farm</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.price4Porfarm} </Text>
                        </View>
                      </View>
                     
                     </View>
                     
                 </View>
                 <View className="h-fit w-full ring-1" >
                    <View className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <View className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >SubTotal. Farm</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.subTotalFarm} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Val desc. Farm</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.valDscFarm} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >P. Farm</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.pFarm} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Prec 2 Porc. Farm</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.price2PorFarm} </Text>
                        </View>
                      </View>
                     
                     </View>
                     
                 </View>
                 <View className="h-fit w-full ring-1" >
                 <View className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <View className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Total detll . Farm</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.totDetFarm} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Cant. Farm</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.cantidadFarm} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Cost. Farm</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.costFarm} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Prec. Farm</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.precFarm} </Text>
                        </View>
                      </View>
                     
                     </View>
                     
                 </View>
                 <View className="h-fit w-full ring-1" >
                 <View className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <View className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Prec #2 . Farm</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.prec2Farm} </Text>
                        </View>
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Prec #3 . Farm</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.prec3Farm} </Text>
                        </View>
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Prec #4 . Farm</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.prec4Farm} </Text>
                        </View>
                      </View>
                     
                     </View>
                     
                 </View>
                 <View className="h-fit w-full ring-1" >
                 <Text className="w-full p-1 bg-zinc-300 text-center flex justify-center items-center font-semibold text-base" > <GrMoney /> COSTOS Y PRECIOS #{producto.code}</Text>
                     
                    <View className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <View className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Porc %. util</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> {producto.porcentajeUtil}% </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Prec. Bruto</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.precBruto} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Porc %. Desc</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.porcentajeDesc}% </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Base. Impo</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.baseImponible} </Text>
                        </View>
                      </View>
                     </View>
                     
                 </View>
                 <View className="h-fit w-full ring-1" >
                 <Text className="w-full p-1 bg-zinc-300 text-center flex justify-center items-center font-semibold text-base" > <GiTakeMyMoney /> IMPUESTOS #{producto.code}</Text>
                     
                    <View className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <View className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <View className="w-full border-r border-r-slate-400">
                          <Text className="font-normal" >Porc %. Impuesto</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> {producto.porcentajeUtil}%</Text>
                        </View>
                      </View>
                     </View>
                     
                 </View>
                 <View className="h-fit w-full ring-1" >
                 <Text className="w-full p-1 bg-zinc-300 text-center flex justify-center items-center font-semibold text-base" > <GiTakeMyMoney/> MAS IMPUESTOS #{producto.code}</Text>
                     
                    <View className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <View className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Id. ICE</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">{producto.idIce}% </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Porc. ICE</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.porcentajeIce} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Id Irbpnrc</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.IdIrbpnr}% </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Porc. Lrbpnr</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> ${producto.porcentajelrbpnr} </Text>
                        </View>
                      </View>
                     </View>

                     <View className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <View className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <View className="w-6/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Hora. Entrada</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">.. {producto.horaEntrada} </Text>
                        </View>
                        <View className="w-6/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Hora. Salida</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200"> .. {producto.horaSalida} </Text>
                        </View>
                      </View>
                     </View>

                 </View>
                 <View className="h-fit w-full ring-1" >
                 <Text className="w-full p-1 bg-zinc-300 text-center flex justify-center items-center font-semibold text-base" > <GrMoney/> PRECIOS #{producto.code}</Text>
                     
                    <View className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <View className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Prec #2. Porc</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.prec2Porc} </Text>
                        </View>
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Prec #3. Porc</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.prec3Porc} </Text>
                        </View>
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Prec #4. Porc</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.prec4Porc} </Text>
                        </View>
                      </View>
                     </View>                     
                 </View>
                 <View className="h-fit w-full ring-1" >
                 <Text className="w-full p-1 bg-zinc-300 text-center flex justify-center items-center font-semibold text-base" > <ImLab/> LABORATORIO</Text>
                     
                    <View className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <View className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Stock Min</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">${producto.stockMin} </Text>
                        </View>
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Fecha caducidad</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">.. {producto.fechaCadu} </Text>
                        </View>
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Tipo producto</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.idTipoProducto} </Text>
                        </View>
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Unid. Media</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.idUnidadMedida} </Text>
                        </View>
                      </View>
                     </View>         
                                 
                 </View>
                 <View className="h-fit w-full ring-1" >
                 <Text className="w-full p-1 bg-zinc-300 text-center flex justify-center items-center font-semibold text-base" > <GoBook/>OTROS</Text>
                     
                    <View className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <View className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Agrupado</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">...{producto.agrupado} </Text>
                        </View>
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Categoria</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.categoriaId} </Text>
                        </View>
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Sub. Categoria</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.subCategoriaId} </Text>
                        </View>
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Sub. Categoria #2</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.subCategoria2} </Text>
                        </View>
                        
                        
                      </View>
                     </View> 
                                                       
                 </View>
                 <View className="h-fit w-full ring-1" >
                    <View className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <View className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Unidades</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">... {producto.unidades} </Text>
                        </View>
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Ref. Min</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.referenciaMinima} </Text>
                        </View>
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Ref. Max</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.referenciaMaxima} </Text>
                        </View>
                        <View className="w-4/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Leyenda</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.leyenda} </Text>
                        </View>
                        
                        
                      </View>
                      
                     </View> 
                                                       
                 </View>
                 <View className="h-fit w-full ring-1" >
                    <View className="w-full border-t border-t-separate  flex flex-wrap justify-between items-center">
                      <View className=" flex justify-between ring-1 ring-slate-400 w-full">
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Ensayo</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">... {producto.ensayo} </Text>
                        </View>
                        <View className="w-3/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Metodo</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.metodo} </Text>
                        </View>
                        <View className="w-2/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Comision P</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.comisionP} </Text>
                        </View>
                        <View className="w-2/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Comision P #2</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.comisionP2} </Text>
                        </View>
                        <View className="w-2/12 border-r border-r-slate-400">
                          <Text className="font-normal" >Externo</Text>
                          <Text className=" my-1w-48 pr-2 text-right bg-zinc-200">#{producto.externo} </Text>
                        </View>
                        
                        
                      </View>
                      
                     </View> 
                                                       
                 </View>
                 
                 

                </View>


               </View>
              </Page > 
               </Document>


    );
    
}
export default VerProductoPDF;