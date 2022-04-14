import { useContext } from "react";
import { modalContext } from "../contexts/ModalContext";

export const useModalContext = ()=>{

    return useContext(modalContext);
    
}