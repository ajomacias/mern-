import { useContext } from "react";
import {userContext} from "../contexts";

export const useUserContext = ()=>{

    return useContext(userContext);

}