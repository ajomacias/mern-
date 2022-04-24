import { createContext, useState, useEffect } from "react";
import { createProductRequest, getProductosRequest,getProductByCodeRequest, updateProductRequest,deleteProductByCodeRequest,searchProductRequest } from "../api/productoRequest";
//import * as data from "../data";
export const productoContext = createContext();

const ProductoProvider = ({children}) => {

    const [ productos, setProductos ] = useState([]);
   // const [ search, setSearch ] = useState([]);

    const createProduct = async (data)=>{
        const result = await createProductRequest(data);
        if(result.status !== 201) return result;

        setProductos( [...productos, result.data.data]);

        return result;
    }

    const deleteProduct = async code=>{

     const result = await deleteProductByCodeRequest(code);

     if(result.status !== 200) return result;

     const newList = productos.filter(producto => producto.code !== code );

     setProductos(newList);

     return result;


    }

    const getProducts = async() =>{
        let response = await getProductosRequest();
        setProductos(response.data?.data?response.data.data.rows:[]);
    }

    const updateProduct = async(data, code) =>{

        const result = await updateProductRequest(data, code);

        if(result.status !== 201) return result;

        const newList = productos.map(producto=>{
            if(producto.code === code){
                return data;
            }
            return producto;
        } )

        setProductos(newList);

        return result;
    }

    const getProductId = (id)=>{
        let response;
        response = productos.find((producto)=>id==producto.id);
        return response;
    }

    const searchProduct = async (clave) =>{
        const res = await searchProductRequest(clave);
         return res;
    }

    useEffect(()=>{
        getProducts();

    },[]);
    
    
    return(
        <productoContext.Provider value={
            {
                createProduct,
                getProducts,
                getProductId,
                getProductByCodeRequest,
                updateProduct,
                deleteProduct,
                searchProduct,
                productos
            }
        } >

        {children}

        </productoContext.Provider>
    )
}

export default ProductoProvider;