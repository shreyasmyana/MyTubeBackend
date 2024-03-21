const asyncHandler = (asyncFun)=>{
    (req,res,next)=>{
        Promise.resolve(asyncFun(req,res,next)).catch((err)=>{
            next(err)
        })
    }
}

export {asyncHandler}