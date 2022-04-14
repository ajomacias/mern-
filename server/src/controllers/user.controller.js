'use strict';
import { Sec_users } from "../models/index.js";
import validator from "validator";
import { createToken } from "../security/verification.js";
import { pageableHelpers } from "../helpers/index.js";

export const logIn = async (req, res, next) => {

  let response;
  const { email, password } = req.body;
  if (!email || !password) return next("400 Email and password are required");
  if (
    !validator.isEmail(email) ||
    !validator.isLength(password, { min: 10, max: 300 })
  ) {
    return next("400 invalid data");
  }
  response = await Sec_users.findByEmailAndAuthenticate(email,password);
  if(!response) return next("401 incorrect data");

  response = createToken(response);

  res.status(200).json({data: response,
  message:"login succes!!"});
};


export const register = async(req,res,next) =>{
  let response; 
  const { email, password, name } = req.body;

  if( !email || !password || !name ) return next("400 invalid data");
  if( !validator.isEmail(email) || !validator.isLength(password, { min: 10, max: 300 }) ) return next("400 invalid data");
  try{
  response = await Sec_users.create({
    name: name,
    email: email,
    password: password
  });
  }catch(error){
    console.error(error);
    return next("402 user already exists");
  }

  if(!response) return next("400 invalid data");

  res.status(200).json({message:"user created"});
}

export const getUsers = async(req, res, next) => {

    const pageble = pageableHelpers.getPageable(req.query);
    let data = [];
    try{
      data = await Sec_users.findAndCountAll({...pageble});
    }catch(err){
        console.error(err);
        return next("409 there was a problem get users")
    }

    res.status(200)
    .json({data:{...pageableHelpers.resPageable(pageble), ...data}, message : "success"})


}