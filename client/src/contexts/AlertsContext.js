import { createContext } from "react";
import toast from "react-hot-toast";

export const alertsContext = createContext();

const AlertProvider = ({children})=>{

    const generalAlert = (message) =>{
        toast((e)=>(
            <div>
                <p className="text-white" >{message}</p>
            </div>

        ),{
            style:{
                backgroundColor: "black"
            },
            duration:4000,
            position:"top-center"
        });
    } 

    return(
        <alertsContext.Provider value={{
            generalAlert

        }} >
            {children}

        </alertsContext.Provider>

    );

}
export default AlertProvider;