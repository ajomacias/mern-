'use strict'
import jwt from "jsonwebtoken";
import Credentials from "../config/Credentials.js";

export const verifyToken = async (req, res, next) => {

  let token = null

  const authHeader = await req.get("Authorization");

  try {

    if (!authHeader || !authHeader.toLowerCase().startsWith("bearer")) {
      return res.status(401).json({
        message: "Token malformed",
      });
    }

    token = authHeader.split(" ")[1]; 

    jwt.verify(token, Credentials.JWT_KEY);

    next();

  } catch (err) {

    return res.status(401).json({
        message: "Token malformed",
      });
  }
};

export const decodedToken = (token) => {
    let decoded = null;
    try{
        decoded = jwt.verify(token.split(" ")[1], Credentials.JWT_KEY);
        return decoded;
    }
    catch(err){
        console.error(err);
        return null;
    }
}

export const createToken = (data) => {

  const token = jwt.sign(data, Credentials.JWT_KEY, {
    expiresIn: "1w",
    algorithm: "HS256",
  });

  return token;
};
