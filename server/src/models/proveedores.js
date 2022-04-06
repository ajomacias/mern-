'use strict'
import { Model, DataTypes } from "sequelize";
import conexion from "../database/database.js";
import { Catalogos } from "./index.js";

export class Proveedores extends Model {};

Proveedores.init({
    _id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        field:"id"
    },
    category : {
        type : DataTypes.INTEGER,
        allowNull : true,
        field:"categoria",
        validate:{
            isNumeric : true
        }
    },
    name : {
        type : DataTypes.STRING(40),
        allowNull : false,
        unique : true,
        field:"nombre",
        validate : {
            notEmpty : true,
            notNull : true,
            max : 40
        }
    },
    contact : {
        type : DataTypes.STRING(20),
        unique : true, 
        allowNull : true,
        field:"telefono",
        validate : {
            notEmpty : false,
            is: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i,
            max : 20,
            min : 10,
            notNull : false
            
        }
    },
    ruc : {
        type : DataTypes.STRING(20),
        unique : true,
        allowNull : true,
        field:"ruc",
        validate : {
            notEmpty : false,
            is: /^[0-9]{14}$/i,
            max : 20,
            min : 11,
            notNull : false
        },
    },
    email : {
        type : DataTypes.STRING(100),
        allowNull : true,
        field:"email",
        validate : {
            notEmpty : false,
            isEmail : true,
            max : 100,
            min : 10,
            notNull : false
        }
    },
    address : {
        type : DataTypes.STRING(100),
        allowNull : true,
        field:"direccion",
        validate : {
            notEmpty : false,
            max : 100,
            min : 10,
            notNull : false
        }
    }
},{
    sequelize : conexion,
    modelName : "proveedores",
    timeStamps : false,
    hooks : {
        //
    }
})

Proveedores.belongsTo(Catalogos,{
    foreignKey :"category",
    targetKey : "_id"
})