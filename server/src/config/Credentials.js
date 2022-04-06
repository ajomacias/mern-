'use strict'
import { config } from "dotenv";
config()

class Credentials{

  static PORT = process.env.PORT || 3000;
  static DB_NAME = process.env.DB_NAME || "test";
  static DB_USER = process.env.DB_USER || "root";
  static DB_PASSWORD = process.env.DB_PASSWORD || "";
  static JWT_KEY = process.env.JWT_KEY || "secret";

}

export default Credentials; 