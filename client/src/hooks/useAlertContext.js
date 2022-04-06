import { useContext } from "react";
import {alertsContext} from "../contexts/";

export const useAlertContext = ()=>{

    return useContext(alertsContext);

}