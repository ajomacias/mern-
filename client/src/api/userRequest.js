import axios from "axios";

export const createUserRequest = async (data) => {
  try {
    const response = await axios.post( "/api/usuarios/register",  data );
    return response; 

  } catch (err) {

    return err.response;

  }
};

export const logInUserRequest = async (data) => {
  try {
    const response = await axios.post( "/api/usuarios/logIn", data );
    return response;

  } catch (err) {
    return err.response;

  }
};