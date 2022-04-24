import { useSearchParams, Link } from "react-router-dom";
import { useProductoContext } from "../hooks/useProductoContext";
//import {  NotFoundPage } from ".";
import { BiLoaderAlt } from "react-icons/bi";
import { useEffect, useState } from "react";

export const SearchProduct = () =>{
    const { searchProduct } = useProductoContext();
    const [results, setResults ] = useState([]);
    const [ params, setParams ] =  useSearchParams();
    const [ loading, setLoading ] = useState(false);

     useEffect(()=>{

        (async()=>{
            setLoading(true);
             const res =  await searchProduct(params.get("a"));
             if(res.status !== 200){
                 setResults([]);
                 return setLoading(false);
             } 
             setResults(res.data.data)
             setLoading(false);

        })();


     },[params])


    return(
        <>
        { loading ? <div
         className="md:p-5 p-0 md:w-10/12 w-full h-full md:h-5/6 flex md:flex flex-wrap md:flex-wrap justify-center md:justify-center items-center md:items-center  md:overflow-y-scroll bg-white md:bg-white "> 
        <BiLoaderAlt className=" text-black text-opacity-90 h-32 w-32 animate-spin" />
        </div>  : 
         <div className="md:p-5 p-1 mt-16 md:w-10/12 w-full h-full md:h-5/6 md:overflow-y-scroll bg-white md:bg-white ">
          { results.map((item, key)=>(
              <div className="border m-1" key={key} >
                  <Link to={"/products/" + item.code} className="border-b font-semibold border-t "> {item.name} </Link>
                  <p dangerouslySetInnerHTML={{__html:item.detail}} ></p>
                  <Link className="border-b mr-5 text-emerald-500 border-b-emerald-500" to={"/products/create/" + item.code} >Editar</Link>
                  <Link className="border-b text-emerald-500 border-b-emerald-500" to={"/products/" + item.code} >Ver</Link>

              </div>
          )) }
        </div>
        }
        
        </>
    )
}