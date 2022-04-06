'use strict'

import app from "./app.js";
import conexion from "./database/database.js";

function main(){

    app.listen(app.get("PORT"), () => {
        console.log(`Server is running on port ${app.get("PORT")}`);
        conexion.sync({force:false, logging : true}).then(()=>{
            console.log("Conexion a la base de datos establecida");
        })
        .catch((err)=>{
            console.error(err);
        
        })
    })
}

main();