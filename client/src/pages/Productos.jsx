import SideBarProducts from "../components/layouts/SideBarProducts";
import { Outlet } from "react-router-dom";
import ProductoProvider from "../contexts/ProductoContext";

export const Productos = () =>{

    return(
        <ProductoProvider>
        <div className=" flex flex-wrap  w-full h-full bg-zinc-700" >
        <SideBarProducts />
        <div className="h-full w-10/12 flex justify-center items-center" >
        <Outlet />
        </div>
        </div>
        </ProductoProvider>
        
    )

}