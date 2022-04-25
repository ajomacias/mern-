import { Sequelize } from "sequelize";
import Credentials from "../config/Credentials.js";

const conexion = new Sequelize(Credentials.DB_NAME,Credentials.DB_USER,Credentials.DB_PASSWORD,{
    dialect: "mysql",
    host: "localhost",
    pool:{
        max: 100,
        min: 0,
        acquire: 30000,
        idle: 10000
    }, 
    port: 3306,

})

export default conexion;