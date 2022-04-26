import axios from "axios";

const getData = ()=>{
    const data = JSON.parse(window.localStorage.getItem("sesion"));

    if(!data?.data){
        window.localStorage.removeItem("sesion");
        window.location.href = "/logIn";
    }


    return data.data
} 
export const createProductRequest = async(data) =>{

    let response = null

    try{

        const token = getData();

        response = await axios.post("/api/productos",data,{
            headers:{
                Authorization :"bearer "+ token
            }
        });
        return response;
        
    }catch(err){
        response = err.response;
        return response;
        
    }
}

export const updateProductRequest = async (data, code) =>{

    let response = null;

    try{
        const token = getData();
        response = await axios.put("/api/productos/" + code,data,{
            headers:{
                Authorization : "bearer "+ token
            }
        });
        return response;
    }catch (err){
        return err.response;
    }

}

export const getProductosRequest = async()=>{
    const token = getData();

     let response = null;
    try{
        
        response = await axios.get("/api/productos",{
            headers:{
                Authorization : "bearer "+ token
            }
        });

        return response;
    }catch(err){
        response = err.response;
        return response;
    }
}

export const getProductByCodeRequest = async (code) =>{
    let response = null;
    try{
        const token = getData();
        response = await axios.get("/api/productos/"+ code,{
            headers:{
                Authorization : "bearer "+ token
            }
        });
        return response.data.data;
    }catch ( err ){
        return null;
    }
}

export const deleteProductByCodeRequest = async (code) =>{
    let response = null;
    try{
        const token = getData();
        response = await axios.delete("/api/productos/" + code,{
            headers:{
                Authorization : "bearer "+ token
            }
        })
        return response;
    }catch(err){
        return err.response;
    }
}

export const searchProductRequest = async ( clave ) =>{
    let response = null;
    const token = getData();
    try{
        response = await axios.get("/api/productos/s/?q=" + clave,{
            headers:{
                Authorization : "bearer "+ token
            }
        } );
        return response;
    }catch(err){
        return err.response;
    }
}