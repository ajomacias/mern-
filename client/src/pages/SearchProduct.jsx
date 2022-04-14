import { useSearchParams, Link } from "react-router-dom";
import { useProductoContext } from "../hooks/useProductoContext";
//import {  NotFoundPage } from ".";
import { FcSearch } from "react-icons/fc";
import { useEffect, useState } from "react";

export const SearchProduct = () =>{
    const { getProductByCode, productos } = useProductoContext();
    //const response = getProductByCode(code);
    const [params, setParams] = useSearchParams();
    //const [results, setResults ] = useState([]); 

    let sos = params.get("a") ? params.get("a").toUpperCase() : "";
    let result = productos.filter((item)=>  item.name.toUpperCase() === sos || item.code.toUpperCase() === sos
    || item.detail.toUpperCase().includes(sos) || item.name.toUpperCase().includes(sos) || item.code.toUpperCase().includes(sos)
    );
    

    
    return(
        <>
        <div className="w-10/12 h-5/6 bg-zinc-100" >
            {!sos && <h2 className="text-2xl font-mono text-stone-500">Escriba el producto a buscar</h2>} 
            {result.map((item,key)=>(
                <div key={key}>
                    <Link className="text-cyan-700 border-b border-b-cyan-700  border border-slate-700 " to={"/products/" + item.code} >{item.name}</Link>
                    <p>{item.detail}</p>
                </div>
            ))}
        </div>
        </>
    )
}