import {
  Document,
  Text,
  View,
  Page,
  StyleSheet,
} from "@react-pdf/renderer";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import axios from "axios";

export const VerProductoPDF = () => {
  const { code } = useParams();
  const [producto, setProducto] = useState(null);
  const location = useNavigate();

  useEffect(() => {
    (async () => {
      const productRequest = await axios.get("/api/productos/" + code,{
        headers:{
          Authorization :"bearer " + JSON.parse(localStorage.getItem("sesion")).data
        }
      });
      setProducto(productRequest.data.data);
    })();
  }, []);


  const styles = StyleSheet.create({
    globlaPage: {
      width: "100%",
      height: "100vh",
    },
    viewPadre: {
      width: "100%",
    //  height: "100%",
      backgroundColor: "#f4f4f5",
      padding: "0.052916cm",
    },
    viewPadre2: {
     // width: "100%",
     // height: "100%",
      backgroundColor: "#f4f4f5",
      padding: "0.026458cm",
      border: "0.4px solid #334155",
      borderRadius: "0.052916cm",
    },
    section : {
     // height : "100%",
      width : "100%",
      border : "0.4px solid #334155"
    },
    sctionView1 : {
      width : "100%",
      borderBottom : "0.4px solid #334155",
      display : "flex",
      flexWrap : "wrap",
      flexDirection : "row",
      justifyContent : "space-between",
      alignItems : "center"

    },
    titleSection : {
      width : "100%",
      //height : "fit-content",
      backgroundColor : "#d4d4d8",
      textAlign : "center",
      display : "flex",
      flexWrap : "wrap",
      alignItems : "center",
      alignContent : "center",
      fontWeight : "semibold",
      fontSize : "0.423328cm",
      padding: "4",
      lineHeight : "1"
    },
    sectionView2 : {
      display : "flex",
      justifyContent : "space-between",
      flexDirection : "row",
      flexWrap : "wrap",
      border : "0.4px solid #94a3b8",
      width : "100%"
    },
    column100 : {
      width : "100%",
      borderRight : "0.4px solid #94a3b8"
    },
    text1 : {
      fontWeight : "400",
      fontSize : "8pt"
    },
    text2 : {
     // paddingRight : "0.211664cm",
      textAlign : "right",
      backgroundColor : "#e4e4e7",
      fontSize : "11pt",
      color : "#404040",
      padding : "4"
    },
    column4_12 : {
      width : "33.33333%",
      borderRight : "1px solid #94a3b8"
    },
    column3_12 : {
      width : "25%",
      borderRight : "1px solid #94a3b8"
    },
    column2_12 : {
      width : "16.66666%",
      borderRight : "1px solid #94a3b8"
    },
    column6_12 : {
      width : "50%",
      borderRight : "1px solid #94a3b8"
    },
    image : {
      width : "33.33333%",
      height : "2.38122cm",
      borderRight : "1px solid #94a3b8",
      display : "flex",
      flexWrap : "wrap",
      alignItems : "center",
      justifyContent : "center"
    }
  });

  document.addEventListener("keypress",(e)=>{
    try{
    let uri = e.path[2].URL.split("/")[3];
    if(uri === "pdf"  &&  e.ctrlKey && e.key == '\x1C') location("/products");
    return;
  }catch(err){
    return;
  }
  })

  return (
    <div>
    <PDFViewer style={styles.globlaPage}>
      <Document>
        <Page size="A4" >
          <View style={styles.viewPadre}>
            <View style={styles.viewPadre2}>
              <View style={styles.section}>
                <Text style={styles.titleSection}>
                  
                  DETALLE PRODUCTO #{producto?.code ? producto.code : ""}
                </Text>
                <View style={styles.sctionView1}>
                  <View style={styles.sectionView2}>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Nombre</Text>
                      <Text style={styles.text2}>
                        
                        {producto?.name ? producto.name : ""}
                      </Text>
                    </View>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Codalt</Text>
                      <Text style={styles.text2}>
                        
                        {producto?.codalt ? producto.codalt : ""}
                      </Text>
                    </View>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Codigo</Text>
                      <Text style={styles.text2}>
                        
                        {producto?.code ? producto.code : ""}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.section}>
                <View style={styles.sctionView1}>
                  <View style={styles.sectionView2}>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Categoria</Text>
                      <Text style={styles.text2}>
                        
                        #{producto?.categoriaId ? producto.categoriaId : ""}
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Cod. Barras</Text>
                      <Text style={styles.text2}>
                        
                        {producto?.codBa ? producto.codBa : ""}
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Precio</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.price ? producto.price : ""}
                      </Text>
                    </View>
                    <View style={styles.column2_12}>
                      <Text style={styles.text1}>Prec.#2</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.price2 ? producto.price2 : ""}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.section}>
                <View style={styles.sctionView1}>
                  <View style={styles.sectionView2}>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Prec. #3</Text>
                      <Text style={styles.text2}>
                        ${producto?.price3 ? producto.price3 : ""}
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Prec.#4</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.price4 ? producto.price4 : ""}
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Cost. Iva</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.costConIv ? producto.costConIv : ""}
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>CostNot. Iva</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.costSinIv ? producto.costSinIv : ""}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.section}>
                <View style={styles.sctionView1}>
                  <View style={styles.sectionView2}>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Tarif. Iva</Text>
                      <Text style={styles.text2}>
                        ${producto?.tarifIv ? producto.tarifIv : ""}
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Catidad.</Text>
                      <Text style={styles.text2}>
                        
                        #{producto?.cantidad ? producto.cantidad : ""}
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Comision</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.cosmision ? producto.comision : ""}
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Comision #2</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.comision2 ? producto.comision2 : ""}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.section}>
                <View style={styles.sctionView1}>
                  <View style={styles.sectionView2}>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Lote.</Text>
                      <Text style={styles.text2}>
                        ${producto?.lotes ? producto.lotes : "" }
                      </Text>
                    </View>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Proveedor.</Text>
                      <Text style={styles.text2}>
                        
                        #{producto?.proveedor ? producto.proveedor : "" }
                      </Text>
                    </View>
                    <View className="w-4/12 h-24 border-r flex flex-wrap items-center justify-center border-r-slate-400">
                      {/*producto?.image ? (
                        <Image style={{width:"20px"}} src={producto.image} />
                      ) : (
                        <Image style={{width:"20px"}} src="" className="h-full w-full" />
                      )*/}
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.section}>
                <Text style={styles.titleSection}>
                  
                   DATOS PARA COMPRA #{producto?.code ? producto.code : ""}
                </Text>

                <View style={styles.sctionView1}>
                  <View style={styles.sectionView2}>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Cant. Farm</Text>
                      <Text style={styles.text2}>
                        
                        ...{producto?.cantFarm ? producto.cantFarm : "" }
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Prom. farm</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.promFarm ? producto.promFarm : "" }
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Paq. Farm</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.paqueteFarm ? producto.paqueteFarm : ""}
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Pvp. farm</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.pvpFarm ? producto.pvpFarm : "" }
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.section}>
                <View style={styles.sctionView1}>
                  <View style={styles.sectionView2}>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Desc. Farm</Text>
                      <Text style={styles.text2}>
                        {producto?.descFarm ? producto.descFarm : "" }%
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Util. Farm</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.utilFarm ? producto.utilFarm : "" }
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Prec 3 Porc. Farm</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.precio3PorFarm ? producto.precio3PorFarm : ""}
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Prec 4 Porc. Farm</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.price4Porfarm ? producto.price4Porfarm : "" }
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.section}>
                <View style={styles.sctionView1}>
                  <View style={styles.sectionView2}>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>SubTotal. Farm</Text>
                      <Text style={styles.text2}>
                        ${producto?.subTotalFarm ? producto.subTotalFarm : ""}
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Val desc. Farm</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.valDscFarm ? producto.valDscFarm : ""}
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>P. Farm</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.pFarm ? producto.pFarm : "" }
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Prec 2 Porc. Farm</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.price2PorFarm ? producto.price2PorFarm : ""}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.section}>
                <View style={styles.sctionView1}>
                  <View style={styles.sectionView2}>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Total detll . Farm</Text>
                      <Text style={styles.text2}>
                        ${producto?.totDetFarm ? producto.totDetFarm : ""}
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Cant. Farm</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.cantidadFarm ? producto.cantidadFarm : ""}
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Cost. Farm</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.costFarm ? producto.costFarm : ""}
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Prec. Farm</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.precFarm ? producto.precFarm : "" }
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.section}>
                <View style={styles.sctionView1}>
                  <View style={styles.sectionView2}>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Prec #2 . Farm</Text>
                      <Text style={styles.text2}>
                        ${producto?.prec2Farm ? producto.prec2Farm : "" }
                      </Text>
                    </View>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Prec #3 . Farm</Text>
                      <Text style={styles.text2}>
                        ${producto?.prec3Farm ? producto.prec3Farm : "" }
                      </Text>
                    </View>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Prec #4 . Farm</Text>
                      <Text style={styles.text2}>
                        ${producto?.prec4Farm ? producto.prec4Farm : "" }
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.section}>
                <Text style={styles.titleSection}>
                  
                   COSTOS Y PRECIOS #{producto?.code ? producto.code : ""}
                </Text>

                <View style={styles.sctionView1}>
                  <View style={styles.sectionView2}>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Porc %. util</Text>
                      <Text style={styles.text2}>
                        
                        {producto?.porcentajeUtil ? producto.porcentajeUtil : ""}%
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Prec. Bruto</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.precBruto ? producto.precBruto : ""}
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Porc %. Desc</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.porcentajeDesc ? producto.porcentajeDesc : ""}%
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Base. Impo</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.baseImponible ? producto.baseImponible : ""}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.section}>
                <Text style={styles.titleSection}>
                   IMPUESTOS #{producto?.code ? producto.code : ""}
                </Text>

                <View style={styles.sctionView1}>
                  <View style={styles.sectionView2}>
                    <View style={styles.column}>
                      <Text style={styles.text1}>Porc %. Impuesto</Text>
                      <Text style={styles.text2}>
                        
                      {producto?.porcentajeUtil ? producto.porcentajeUtil : "" }%
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.section}>
                <Text style={styles.titleSection}>
                  
 MAS IMPUESTOS #{producto?.code ? producto.code : "" }
                </Text>

                <View style={styles.sctionView1}>
                  <View style={styles.sectionView2}>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Id. ICE</Text>
                      <Text style={styles.text2}>
                        {producto?.idIce ? producto.idIce : ""}%
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Porc. ICE</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.porcentajeIce ? producto.porcentajeIce : ""}
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Id Irbpnrc</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.IdIrbpnr ? producto.IdIrbpnr : ""}%
                      </Text>
                    </View>
                    <View style={styles.column3_12}>
                      <Text style={styles.text1}>Porc. Lrbpnr</Text>
                      <Text style={styles.text2}>
                        
                        ${producto?.porcentajelrbpnr ? producto.porcentajelrbpnr : ""}
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={styles.sctionView1}>
                  <View style={styles.sectionView2}>
                    <View style={styles.column6_12}>
                      <Text style={styles.text1}>Hora. Entrada</Text>
                      <Text style={styles.text2}>
                        .. {producto?.horaEntrada ? producto.horaEntrada : "" }
                      </Text>
                    </View>
                    <View style={styles.column6_12}>
                      <Text style={styles.text1}>Hora. Salida</Text>
                      <Text style={styles.text2}>
                        
                        .. {producto?.horaSalida ? producto.horaSalida : "" }
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.section}>
                <Text style={styles.titleSection}>
                  
                   PRECIOS #{producto?.code ? producto.code : "" }
                </Text>

                <View style={styles.sctionView1}>
                  <View style={styles.sectionView2}>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Prec #2. Porc</Text>
                      <Text style={styles.text2}>
                        ${producto?.prec2Porc ? producto.prec2Porc : ""}
                      </Text>
                    </View>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Prec #3. Porc</Text>
                      <Text style={styles.text2}>
                        ${producto?.prec3Porc ? producto.prec3Porc : ""}
                      </Text>
                    </View>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Prec #4. Porc</Text>
                      <Text style={styles.text2}>
                        ${producto?.prec4Porc ? producto.prec4Porc : ""}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.section}>
                <Text style={styles.titleSection}>
                  
                  LABORATORIO
                </Text>

                <View style={styles.sctionView1}>
                  <View style={styles.sectionView2}>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Stock Min</Text>
                      <Text style={styles.text2}>
                        ${producto?.stockMin ? producto.stockMin : "" }
                      </Text>
                    </View>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Fecha caducidad</Text>
                      <Text style={styles.text2}>
                        .. {producto?.fechaCadu ? producto.fechaCadu : "" }
                      </Text>
                    </View>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Tipo producto</Text>
                      <Text style={styles.text2}>
                        #{producto?.idTipoProducto ? producto.idTipoProducto : "" }
                      </Text>
                    </View>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Unid. Media</Text>
                      <Text style={styles.text2}>
                        #{producto?.idUnidadMedida ? producto.idUnidadMedida : "" }
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.section}>
                <Text style={styles.titleSection}>
                  
                  OTROS
                </Text>

                <View style={styles.sctionView1}>
                  <View style={styles.sectionView2}>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Agrupado</Text>
                      <Text style={styles.text2}>
                        ...{producto?.agrupado ? producto.agrupado : "" }
                      </Text>
                    </View>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Categoria</Text>
                      <Text style={styles.text2}>
                        #{producto?.categoriaId ? producto.categoriaId : "" }
                      </Text>
                    </View>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Sub. Categoria</Text>
                      <Text style={styles.text2}>
                        #{producto?.subCategoriaId ? producto.subCategoriaId : "" }
                      </Text>
                    </View>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Sub. Categoria #2</Text>
                      <Text style={styles.text2}>
                        #{producto?.subCategoria2 ? producto.subCategoria2 : "" }
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.section}>
                <View style={styles.sctionView1}>
                  <View style={styles.sectionView2}>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Unidades</Text>
                      <Text style={styles.text2}>
                        ... {producto?.unidades ? producto.unidades : ""}
                      </Text>
                    </View>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Ref. Min</Text>
                      <Text style={styles.text2}>
                        #{producto?.referenciaMinima ? producto.referenciaMinima : ""}
                      </Text>
                    </View>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Ref. Max</Text>
                      <Text style={styles.text2}>
                        #{producto?.referenciaMaxima ? producto.referenciaMaxima : ""}
                      </Text>
                    </View>
                    <View style={styles.column4_12}>
                      <Text style={styles.text1}>Leyenda</Text>
                      <Text style={styles.text2}>
                        #{producto?.leyenda ? producto.leyenda : ""}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              
            </View>
          </View> 
        </Page>
      </Document>
    </PDFViewer>
    </div>
  );
};

export default VerProductoPDF;
