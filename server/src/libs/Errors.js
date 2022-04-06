
export const GlobalErrorsHandle = (err,req,res,next) =>{
    const status = err.split(" ")[0];
    console.log(err.replace(status,""));
    res.status(status).json({
        message: err.replace(status,"")
    });
}