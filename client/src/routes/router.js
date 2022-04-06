import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./publicRoutes";
import PrivateRoutes from "./privateRoutes";
import { SigUpPage, LogInPage, HomePage, NotFoundPage } from "../pages/";
import { Header } from "../components/layouts/Header";

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
          <Route path="products" element={<h1>Hello products!!</h1>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default Router;
