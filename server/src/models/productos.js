import { Model, DataTypes } from "sequelize";
import conexion from "../database/database.js";
import { Proveedores }  from "./index.js";

export class Productos extends Model { };

Productos.init({
    _id : {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
        field : "id"
    },
    code : {
        type: DataTypes.STRING(20),
        allowNull : false,
        unique : true,
        field : "codigo"
    },
    name : {
        type: DataTypes.STRING(100),
        allowNull : false,
        field : "nombre",
        validate : {
            notEmpty : true,
            notNull : true,
            min : 3,
            max : 100,
        }
    },
    detail : {
        type: DataTypes.TEXT,   
        allowNull : true,
        defaultValue : "not description",
        field : "descripcion",
    },
    codBa : {
        type :DataTypes.STRING(20),
        allowNull : false,
        field : "codbarras",
        validate:{
            notEmpty : true,
            notNull : true 
        } 
    },
    codalt : {
        type : DataTypes.STRING(20),
        allowNull : false,
        field : "codalt",
        validate : {
            notEmpty : true,
            notNull : true
        }

    },
    price : {
        type: DataTypes.FLOAT(10,4),
        defaultValue : 0.0000 ,
        allowNull : false,
        field : "precio",
        validate : {
            notEmpty : true,
            notNull : true,
            min : 0,
            max : 1000000,
        }
    },
    price2 : {
        type: DataTypes.FLOAT(10,4),
        defaultValue : 0.0000 ,
        allowNull : true,
        field : "precio2",
        validate : {
            notNull : false,
            min : 0,
            max : 1000000,
        }
    },
    price3 : {
        type: DataTypes.FLOAT(10,4),
        defaultValue : 0.0000 ,
        allowNull : true,
        field : "precio3",
        validate : {
            min : 0,
            max : 1000000,
        }
    },
    price4 : {
        type: DataTypes.FLOAT(10,4),
        defaultValue : 0.0000 ,
        allowNull : true,
        field : "precio4",
        validate : {
            notNull : false,
            min : 0,
            max : 1000000,
        } 
    },
    producweb : {
        type : DataTypes.STRING,
        defaultValue : null,
        allowNull: true,
        field : "productoweb"
    },
    cantidad : {
        type: DataTypes.FLOAT(10,4),
        defaultValue : 0.0000 ,
        allowNull : false,
        field : "cantidad",
        validate : {
            notNull : true
        }
    },
    costo : {
        type: DataTypes.FLOAT(10,4),
        defaultValue : 0.0000 ,
        allowNull : true,
        field : "costo",
        validate : {
            notNull : false,
            min : 0,
            max : 1000000,
        }
    },
    tariIv : {
        type : DataTypes.INTEGER(11),
        defaultValue : 0,
        field : "tarifadeliva",
        allowNull : true,
        validate : {
            isInt : true
        }

    },
    image : {
        type : DataTypes.TEXT,
        allowNull : true,
        field : "picture",

    },
    producWeb : {
        type : DataTypes.INTEGER(11),
        allowNull : true,
        field : "productweb",
    },
    idUnidadMedida : {
        type :DataTypes.INTEGER(11),
        allowNull : true,
        field : "id_unidad_medida"
    },
    idTipoProducto : {
        type :DataTypes.INTEGER(11),
        allowNull : true,
        field : "id_tipo_producto"
    },
    categoriaId : {
        type : DataTypes.INTEGER,
        allowNull : true,
        field : "id_categoria"
    },
    subcategoriaId : {
        type : DataTypes.INTEGER,
        allowNull : true,
        field : "subcategoryid"
    },
    subcategoriaId2 : {
        type : DataTypes.INTEGER,
        allowNull : true,
        field : "subcategoryid2"
    },
    stockMin : {
        type : DataTypes.INTEGER(3),
        allowNull : true,
        defaultValue : 3,
        field : "stockminimo"
    },
    fechaCadu : {
        type : DataTypes.DATEONLY,
        allowNull : false,
        defaultValue : new Date().toISOString().split("T")[0],
        field : "fechacaducidad"
    },

    prec4Porc : {
        type: DataTypes.FLOAT(10,4),
        defaultValue : 0.0000 ,
        allowNull : true,
        field : "precio4porc",
    },
    prec3Porc : {
        type: DataTypes.FLOAT(10,4),
        defaultValue : 0.0000 ,
        allowNull : true,
        field : "precio3porc",
    },
    prec2Porc : {
        type: DataTypes.FLOAT(10,4),
        defaultValue : 0.0000 ,
        allowNull : true,
        field : "precio2porc",
    },
    porcentajeUtil : {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "porcentaje_utilidad",
    },
    porcentajeDesc : {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "porcentaje_descuento",
    },
    precBruto : {
        type: DataTypes.FLOAT(10,4),
        defaultValue : 0.0000 ,
        allowNull : true,
        field : "precio_bruto",
    },
    baseImponible : {
        type: DataTypes.FLOAT(10,4),
        defaultValue : 0.0000 ,
        allowNull : true,
        field : "base_imponible",
    },
    idIce : {
        type : DataTypes.INTEGER,
        allowNull : true,
        field : "id_ice"
    },
    IdIrbpnr : {
        type : DataTypes.INTEGER,
        allowNull : true,
        field : "id_irbpnr"
    },
    porcentajeImp : {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "porcentaje_impuesto",
    },
    porcentajeIce : {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "porcentaje_ice",
    },
    porcentajelrbpnr : {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "porcentaje_irbpnr",
    },
    cantidadFarm: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "cantfarm",
    },
    promFarm: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "promocfarm",
    },
    paqueteFarm: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "paquetefarm",
    },
    pvpFarm: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "pvpfarm",
    },
    descFarm: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "descfarm",
    },
    price2PorFarm: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "prec2porfarm",
    },
    price3PorFarm: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "prec3porfarm",
    },
    price4PorFarm: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "prec4porfarm",
    },
    subTotalFarm: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "subtotalfarm",
    },
    valDscFarm: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "lvalordsctofarm",
    },
    totDetFarm: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "totaldetallefarm",
    },
    cantidadFarm: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "cantidadfarm",
    },
    costFarm: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "costofarm",
    },
    prec2Farm: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "precio2farm",
    },
    prec3Farm: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "precio3farm",
    },
    prec4Farm: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "precio4farm",
    },
    utilFarm: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "utilidadfarm",
    },
    pFarm: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "pfarm",
    },
    constSinIv: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "costosiniva",
    },
    constConIv: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "costoconiva",
    },
    horaEntrada: {
        type: DataTypes.DATE,
        allowNull : true,
        defaultValue : new Date().toISOString().replace("T"," ").replace("Z","").slice(0,19),
        field : "horadeentrada",
    },
    horaSalida: {
        type: DataTypes.DATE,
        allowNull : true,
        defaultValue : new Date().toISOString().replace("T"," ").replace("Z","").slice(0,19),
        field : "horadesalida",
        
    },
    unidades: {
        type: DataTypes.STRING(10),
        allowNull : true,
        field : "unidades",
    },
    referenciaMinima: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "referencia",
    },
    referenciaMaxima: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "referencia2",
    },
    comision: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "comision",
    },
    agrupado: {
        type: DataTypes.INTEGER(4),
        allowNull : true,
        field : "agrupado",
    },
    leyenda: {
        type: DataTypes.INTEGER(233),
        allowNull : true,
        field : "leyenda",
    },
    ensayo: {
        type: DataTypes.INTEGER(233),
        allowNull : true,
        field : "Ensayo",
    },
    metodo: {
        type: DataTypes.STRING(500),
        allowNull : true,
        field : "metodo",
    },
    orden: {
        type: DataTypes.INTEGER(11),
        allowNull : true,
        field : "orden",
    },
    comision2: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "comision2",
    },
    comisionP: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "comisionp",
    },
    comisionP2: {
        type: DataTypes.FLOAT(10,4),
        allowNull : true,
        field : "comisionp2",
    },
    externo: {
        type: DataTypes.INTEGER(4),
        allowNull : true,
        field : "externo",
    },
    lote: {
        type: DataTypes.STRING(20),
        allowNull : true,
        field : "lote",
    },

    proveedor : {
        type: DataTypes.INTEGER,
        allowNull : true,
        field : "proveedor",
        defaultValue : null,
        validate : {
            notNull : false
        }
    },
    generico :{
        type : DataTypes.STRING(120),
        allowNull : true,
        field : "generico"
    }
   
},{
    hooks : {
        beforeCreate : (producto) =>{
            if(producto.proveedor === "") producto.proveedor = null; 

        },
        beforeUpdate : (producto) =>{

            if(producto.proveedor === "") producto.proveedor = null; 
        }
    },
    
    sequelize : conexion,
    timestamps : false,
    modelName : "productos"

})

Productos.belongsTo(Proveedores,{
    foreignKey : "proveedor",
    targetKey : "_id"
})
