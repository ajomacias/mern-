'use strict'
import { Model, DataTypes } from "sequelize";
import conexion from "../database/database.js";

export class Catalogos extends Model{ }

Catalogos.init({
    _id:{
        type:DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        field : "id",
    },
    code:{
        type : DataTypes.STRING(40),
        allowNull : false,
        unique:true,
        field:"codigo",
        validate:{
            notEmpty:true,
            notNull:true,
            max:40,
        },
    },
    name:{
        type : DataTypes.STRING(40),
        allowNull : false,
        field: "nombre" ,
        validate:{
            min: 4,
            max: 40,
            notNull:true,
            notEmpty:true
        }
    },
    type : {
        type:DataTypes.STRING(40),
        allowNull : false,
        field: "tipo",
        validate:{
            min:4,
            max: 40,
            notEmpty : true,
            notNull : true
        }

    }
},{
    sequelize:conexion,
    modelName : "catalogos",
    timeStamps:false,
    hooks:{
        beforeCreate : (catalogo)=>{
            console.log(catalogo)

        }
    }
})
