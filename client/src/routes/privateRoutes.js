import { Outlet, Navigate } from "react-router-dom";
import { Header } from "../components/layouts/Header";

const PrivateRoutes = ( {children} )=>{

    const verification = () =>{

        const verify = window.localStorage.getItem("sesion");

        if(!verify) return false;

        return true;
        
    }

    return(
        <div>
            <Header/>
        {!verification()? <Navigate to="/logIn" replace /> : <Outlet />  }
        </div>
    )

}

export default PrivateRoutes;
