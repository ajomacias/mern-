import { createContext, useState } from "react";
import { createUserRequest, logInUserRequest } from "../api/userRequest";

export const userContext = createContext();

const UserProvider = ({children})=>{

    const [sesion, setSesion ] = useState({
        sesion:false
    });

    const createUser = async (data)=>{

        const response = await createUserRequest(data);
        return response;

    }

    const getInto = async(data)=>{
        
        const response = await logInUserRequest(data);

        if(response.status !==200){
            return {...response.data, verify:false}
        }

        setSesion({
            sesion : true
        })


        window.localStorage.setItem("sesion",JSON.stringify(response.data));

        return {...response.data, verify:true};

    }

    return(
       <userContext.Provider value={{
           createUser,
           getInto,
           sesion
       }}>
           {children}
       </userContext.Provider>
    )

}

export default UserProvider;