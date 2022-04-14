import { Outlet } from "react-router-dom";

const PublicRoutes = ()=>{
    return(
      <div className="bg-key min-h-screen">
          <Outlet /> 
          
        </div>
    )

}

export default PublicRoutes;