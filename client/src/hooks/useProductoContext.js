import { useContext } from "react";
import { productoContext } from "../contexts";

export const useProductoContext = ()=>{

    return useContext(productoContext);
    
}