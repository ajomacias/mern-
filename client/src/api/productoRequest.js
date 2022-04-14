import axios from "axios";

export const createProductRequest = async(data) =>{
    let response = null

    try{

        response = await axios.post("/api/productos",data);
        return response;
        
    }catch(err){
        response = err.response;
        console.error(err);
        return response;
        
    }
}

export const updateProductRequest = async (data, code) =>{

    let response = null;

    try{
        response = await axios.put("/api/productos/" + code,data);
        return response;
    }catch (err){
        return err.response;
    }

}

export const getProductosRequest = async()=>{
     let response = null;
    try{
        response = await axios.get("/api/productos");

        return response;
    }catch(err){
        response = err.response;
        return response;
    }
}

export const getProductByCodeRequest = async (code) =>{
    let response = null;
    try{
        response = await axios.get("/api/productos/"+ code);
        return response.data.data;
    }catch ( err ){
        return null;
    }
}

export const deleteProductByCodeRequest = async (code) =>{
    let response = null;
    try{
        response = await axios.delete("/api/productos/" + code)
        return response;
    }catch(err){
        return err.response;
    }
}