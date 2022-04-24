import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./publicRoutes";
import PrivateRoutes from "./privateRoutes";
import { SigUpPage, LogInPage, HomePage, NotFoundPage,Productos, ViewProduct,SearchProduct } from "../pages/";
import { TablaProducts, FormularioProducto } from "../components";
import { VerProductoPDF } from "../pages/VerProductoPDF";

const Router = () => {
  return (
    <div className="bg-key min-h-screen">
      
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/logIn" element={<LogInPage />} />
          <Route path="/sigUp" element={<SigUpPage />} />
        </Route>
        
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/products/*" element={<Productos />} >

            <Route path="" element={<TablaProducts />} />
            <Route path="create" element={<FormularioProducto />} />
            <Route path="create/:code" element={<FormularioProducto />} />
            <Route path=":code" element={<ViewProduct />} />
            <Route path="search" element={<SearchProduct />} />
            <Route path="stadistic" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage/>} />
          </Route>
          
          
        </Route>
        

        <Route path="*" element={<NotFoundPage />} />
        <Route path="/pdf/:code.pdf" element={<VerProductoPDF />} />
      </Routes>
    </div>
  );
};

export default Router;
