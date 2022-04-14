import { Outlet, Navigate } from "react-router-dom";
import { Header } from "../components/layouts/HeaderPrivate";
import { useUserContext } from "../hooks/index";

const PrivateRoutes = ( )=>{

    const { logOut } = useUserContext();


    const verification = () =>{

        const verify = window.localStorage.getItem("sesion");

        if(!verify) return false;

        return true;
        
    }
    

    return(
        <div className="flex justify-center h-[601px]">
        <div className=" w-[1400px] bg-zinc-700" >
            <Header functions={{logOut}} />
        {!verification()? <Navigate to="/logIn" replace /> : <Outlet />  
        }
        </div>
        </div>
    )

}

export default PrivateRoutes;
