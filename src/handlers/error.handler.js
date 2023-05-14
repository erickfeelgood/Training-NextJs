

const ErrorHandler = (err,req,res,next) => {
    const {status,message,error} = err;

    const errObj = (error,message,status) => {
        status: status || 500,
        message,
        error
    }

    return res.status(errObj.status)
    .json({
        ...errObj,
        error:true,
        message:errObj?.message ??
        "Error : some error",
        data:err
    })
   
}

export default ErrorHandler;