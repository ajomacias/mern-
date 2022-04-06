'use strict'
import { Model, DataTypes, QueryTypes } from "sequelize";
import conexion from "../database/database.js";
import { UserQuerys } from "../database/querys/index.js";
import { AccesoEmpresas } from "./index.js";
import bcrypt from "bcrypt";

export class Sec_users extends Model {}

Sec_users.init(
  {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "_login",
    },
    empresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "empresa",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: "name",
      validate: {
        notEmpty: true,
        len: [3, 50],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: "email",
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "pswd",
      validate: {
        notEmpty: true,
        len: [10, 400],
      },
    },
    admin: {
      type: DataTypes.STRING(1),
      defaultValue: "N",
      allowNull: true,
      field:"priv_admin"
    },
    active: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N",
      field: "active",
    },
  },

  {
    hooks: {
      beforeCreate: (user) => {
        user.password = bcrypt.hashSync(user.password, 10);
      },
      
    },
    timestamps: false,
    sequelize: conexion,
    modelName: "sec_users",
  }
);

Sec_users.findByEmpresa = async function (empresa = null) {
  let data, records;
  try {
    if (!empresa) {
      records = conexion.query(UserQuerys.GET_USERS_AND_EMPRESA, {
        type: QueryTypes.SELECT,
      });
      data = records[0];
      return data;
    } else {
      records = await conexion.query(UserQuerys.GET_USERS_BY_EMPRESA, {
        replacements: [empresa],
        type: QueryTypes.SELECT,
      });
      data = records[0];
      return data;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

Sec_users.findByEmailAndAuthenticate = async (_email, password="") => {
  let data, records;
  try {
    records = await conexion.query(`SELECT * FROM sec_users WHERE email = ? `, {
      replacements: [_email],
      type: QueryTypes.SELECT,
    });
    if (!records) return null;

    if (!(await bcrypt.compare(password, records[0].pswd))) return null;

    data = {
      user: records[0].name,
      email: records[0].email,
    };
    return data;
  } catch (error) {
    return null;
  }
};

Sec_users.belongsTo(AccesoEmpresas, {
  foreignKey: "empresa",
  targetKey: "_id",
});