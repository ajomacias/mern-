import { Document, Text, View ,Page,Image , StyleSheet } from "@react-pdf/renderer";
import { useParams } from "react-router-dom";
import { BiDetail,BiLoaderAlt } from "react-icons/bi";
import { BsCashCoin } from "react-icons/bs";
//import { NotFoundPage } from "../pages";
import { useEffect, useState } from "react";
import { FcRemoveImage } from "react-icons/fc";
import { GrMoney } from "react-icons/gr";
import { GiTakeMyMoney } from "react-icons/gi";
import { ImLab } from "react-icons/im";
import { GoBook } from "react-icons/go";
import { PDFViewer } from "@react-pdf/renderer";
import axios from "axios";

export const VerProductoPDF = () =>{

    const { code } = useParams();
    //const response = getProductByCodeRequest(code);
    const [producto, setProducto] = useState(null);
    console.log(code);

    useEffect(() => {
        (async () => {
            const productRequest = await axios.get("/api/productos/"+code ) ;
            setProducto(productRequest.data.data);
        })()
    }, [])

    console.log(producto);
    
    const styles = StyleSheet.create({
      globlaPage :{
        width : "100%",
        height : "100vh"
      }
    })
   if(!producto) return(
      
      <PDFViewer style={styles.globlaPage} >
        <Document>
          <Page size="A4" >
            <View > 
            <Text>
              sjdhsjdg
            </Text>
            </View>

          </Page>
        </Document>
      </PDFViewer>
      
    )
    

   return(
      <PDFViewer style={styles.globlaPage} >
        <Document >
        <Page size="A4" >
        <View className="w-10/12 h-5/6 p-2 bg-zinc-100" >
                <View >
                 <View >
                 <Text> <BiDetail /> DETALLE PRODUCTO #{producto.code}</Text>
                    <View>
                      <View>
                        <View>
                          <Text>Nombre</Text>
                          <Text> {producto.name} </Text> 
                          
                        </View>
                        <View>
                          <Text>Codalt</Text>
                          <Text> {producto.codalt} </Text>
                        </View>
                        <View>
                          <Text>Codigo</Text>
                          <Text> {producto.code} </Text>
                        </View>
                      </View>
                     </View>
                     
                 </View>


               </View>
               </View>
              </Page > 
               </Document>
               </PDFViewer>


    );
  
    
}

export default VerProductoPDF;