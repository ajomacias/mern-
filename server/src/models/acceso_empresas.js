import { Model, DataTypes } from "sequelize";
import conexion from "../database/database.js";

export class AccesoEmpresas extends Model { }

AccesoEmpresas.init({
    _id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id'
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: true,
        field: 'empresa',
        defaultValue:null
    },
    db:{
        type: DataTypes.STRING,
        allowNull: true,
        field: 'bd',
        defaultValue: null
    },

},
{
    sequelize: conexion,
    timestamps: false,
    modelName: 'acceso_empresas'
});
